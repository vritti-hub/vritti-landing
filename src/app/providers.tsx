'use client';

import { ThemeProvider } from 'quantum-ui';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultColorScheme="light">
      {children}
    </ThemeProvider>
  );
}