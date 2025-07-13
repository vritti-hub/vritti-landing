'use client';

import { AnimationProvider } from '@/components/providers/AnimationProvider';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import { ToastProvider } from '@/components/ui/Toast';
import { ThemeProvider } from '@vritti/quantum-ui';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AnimationProvider>
          <ToastProvider>{children}</ToastProvider>
        </AnimationProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
