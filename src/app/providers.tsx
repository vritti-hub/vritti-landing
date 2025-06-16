'use client';

import { ThemeProvider } from 'quantum-ui';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import { ToastProvider } from '@/components/ui/Toast';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <ThemeProvider 
        defaultColorScheme="dark"
        storageKey="vritti-theme"
        attribute="data-theme"
      >
        <ToastProvider>
          {children}
        </ToastProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}