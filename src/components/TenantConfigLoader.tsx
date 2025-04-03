import { headers } from 'next/headers';
import { loadTenantConfig } from '@/lib/utils';
import { TenantProvider } from './TenantProvider';

export async function TenantConfigLoader({ children }: { children: React.ReactNode }) {
  const headersList = headers();
  const tenantId = headersList.get('x-tenant-id') || 'master';
  const config = await loadTenantConfig(tenantId);

  return <TenantProvider config={config}>{children}</TenantProvider>;
} 