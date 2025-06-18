'use client';

import { useEffect } from 'react';
import { getAnimationStyles } from '@/lib/utils/css-animations';

/**
 * Provider component that injects CSS animation styles
 * Should be included near the root of the app
 */
export function AnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Check if styles are already injected
    if (document.getElementById('css-animations-styles')) {
      return;
    }

    // Create and inject styles
    const styleElement = document.createElement('style');
    styleElement.id = 'css-animations-styles';
    styleElement.textContent = getAnimationStyles();
    document.head.appendChild(styleElement);

    return () => {
      // Cleanup styles when component unmounts
      const existingStyles = document.getElementById('css-animations-styles');
      if (existingStyles) {
        existingStyles.remove();
      }
    };
  }, []);

  return <>{children}</>;
}