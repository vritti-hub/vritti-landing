'use client';

import { ThemeProvider } from '@vritti/quantum-ui';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import { ToastProvider } from '@/components/ui/Toast';
import { AnimationProvider } from '@/components/providers/AnimationProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <ThemeProvider 
        defaultColorScheme="dark"
        storageKey="vritti-theme"
        attribute="data-theme"
      >
        <AnimationProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </AnimationProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}