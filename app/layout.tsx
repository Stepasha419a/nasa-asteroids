import { Root } from '@/application';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './layout.css';

export const metadata: Metadata = {
  title: 'Nasa Asteroids Armageddon',
  description: 'Site for watching asteroids properties',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Root>{children}</Root>
      </body>
    </html>
  );
}
