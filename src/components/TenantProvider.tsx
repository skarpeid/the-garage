'use client';

import React from 'react';
import { TenantContext, TenantConfig, defaultTenantConfig } from './TenantContext';

interface TenantProviderProps {
  config?: Partial<TenantConfig>;
  children: React.ReactNode;
}

export function TenantProvider({ config, children }: TenantProviderProps) {
  const mergedConfig: TenantConfig = {
    ...defaultTenantConfig,
    ...config,
    theme: {
      ...defaultTenantConfig.theme,
      ...(config?.theme || {}),
    },
    content: {
      ...defaultTenantConfig.content,
      ...(config?.content || {}),
    },
    components: {
      ...defaultTenantConfig.components,
      ...(config?.components || {}),
    },
  };

  return (
    <TenantContext.Provider value={mergedConfig}>
      {children}
    </TenantContext.Provider>
  );
} 