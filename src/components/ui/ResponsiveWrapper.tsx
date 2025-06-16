'use client';

import { useState, useEffect } from 'react';

interface ResponsiveWrapperProps {
  children: React.ReactNode;
  breakpoint?: number;
  showAbove?: boolean;
}

export default function ResponsiveWrapper({ 
  children, 
  breakpoint = 768, 
  showAbove = true 
}: ResponsiveWrapperProps) {
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Don't render until client-side to avoid hydration mismatch
  if (!isClient) {
    return null;
  }

  const shouldShow = showAbove 
    ? windowWidth >= breakpoint 
    : windowWidth < breakpoint;

  return shouldShow ? <>{children}</> : null;
}