import { useTenantConfig } from '@/lib/tenantConfig';

export const useTenantContent = (section: string) => {
  const config = useTenantConfig();
  return config.content[section] || {};
};

export const useComponentOverrides = (componentName: string) => {
  const config = useTenantConfig();
  return config.components[componentName] || {};
}; 