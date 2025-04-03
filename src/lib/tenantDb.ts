import { PrismaClient } from '@prisma/client'
import { Pool } from 'pg'

// Create a connection pool to the master database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

// Cache for tenant Prisma clients
const tenantPrismaClients: { [key: string]: PrismaClient } = {}

export async function createTenantDatabase(tenantSlug: string): Promise<string> {
  const dbName = `${process.env.TENANT_DATABASE_PREFIX}${tenantSlug}`
  
  try {
    // Connect to the default database to create a new one
    await pool.query(`CREATE DATABASE "${dbName}"`)
    
    // Generate the database URL for the new tenant
    const tenantDbUrl = process.env.DATABASE_URL?.replace(
      /\/[^/]+\?/,
      `/${dbName}?`
    )
    
    if (!tenantDbUrl) {
      throw new Error('Invalid database URL')
    }
    
    return tenantDbUrl
  } catch (error) {
    console.error('Error creating tenant database:', error)
    throw error
  }
}

export async function getTenantPrismaClient(tenantDatabaseUrl: string): Promise<PrismaClient> {
  if (tenantPrismaClients[tenantDatabaseUrl]) {
    return tenantPrismaClients[tenantDatabaseUrl]
  }

  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: tenantDatabaseUrl,
      },
    },
  })

  tenantPrismaClients[tenantDatabaseUrl] = prisma
  return prisma
}

export async function deleteTenantDatabase(tenantSlug: string): Promise<void> {
  const dbName = `${process.env.TENANT_DATABASE_PREFIX}${tenantSlug}`
  
  try {
    // Disconnect any existing connections
    const tenantDbUrl = process.env.DATABASE_URL?.replace(
      /\/[^/]+\?/,
      `/${dbName}?`
    )
    
    if (tenantDbUrl && tenantPrismaClients[tenantDbUrl]) {
      await tenantPrismaClients[tenantDbUrl].$disconnect()
      delete tenantPrismaClients[tenantDbUrl]
    }
    
    // Drop the database
    await pool.query(`DROP DATABASE IF EXISTS "${dbName}"`)
  } catch (error) {
    console.error('Error deleting tenant database:', error)
    throw error
  }
} 