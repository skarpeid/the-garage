import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function loadTenantConfig(tenantId: string) {
  // In a real application, this would load from your backend/API
  // For now, we'll simulate loading from a static configuration
  const config = await import(`../config/tenants/${tenantId}.json`).catch(() => null);
  return config || {};
}
