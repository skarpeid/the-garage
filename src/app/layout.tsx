import './globals.css';
import LayoutContent from './LayoutContent';

// Mock user data removed - now in LayoutContent.tsx

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // useState and related logic removed

  return (
    <html lang="en" className="h-full overflow-hidden">
      <body className="h-full bg-[#0c0d10] overflow-hidden">
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
