import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This would typically come from your database or configuration
const TENANT_CONFIGS: Record<string, string> = {
  'client1.localhost:3000': 'client1',
  'localhost:3000': 'master',
}

export async function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const tenantId = TENANT_CONFIGS[hostname] || 'master'

  // Clone the response and add tenant header
  const response = NextResponse.next()
  response.headers.set('x-tenant-id', tenantId)

  // Redirect root path to /workspace
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/workspace', request.url))
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 