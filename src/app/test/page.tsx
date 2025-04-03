'use client';

import { useTenantConfig } from '@/components/TenantContext';
import { Card } from '@/components/ui/Card';

export default function TestPage() {
  const config = useTenantConfig();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Tenant Configuration Test</h1>
      
      <Card>
        <Card.Header>
          <Card.Title>Current Tenant</Card.Title>
          <Card.Description>ID: {config.id}</Card.Description>
        </Card.Header>
      </Card>

      <Card>
        <Card.Header>
          <Card.Title>Theme Colors</Card.Title>
          <Card.Description>Current theme configuration</Card.Description>
        </Card.Header>
        <div className="p-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: config.theme.primary }} />
              <span>Primary: {config.theme.primary}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: config.theme.secondary }} />
              <span>Secondary: {config.theme.secondary}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: config.theme.accent }} />
              <span>Accent: {config.theme.accent}</span>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <Card.Header>
          <Card.Title>Content</Card.Title>
          <Card.Description>Tenant-specific content</Card.Description>
        </Card.Header>
        <div className="p-6">
          <pre className="bg-gray-100 p-4 rounded">
            {JSON.stringify(config.content, null, 2)}
          </pre>
        </div>
      </Card>

      <Card>
        <Card.Header>
          <Card.Title>Component Overrides</Card.Title>
          <Card.Description>Tenant-specific component configurations</Card.Description>
        </Card.Header>
        <div className="p-6">
          <pre className="bg-gray-100 p-4 rounded">
            {JSON.stringify(config.components, null, 2)}
          </pre>
        </div>
      </Card>
    </div>
  );
}