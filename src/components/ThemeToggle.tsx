'use client';

import { Button } from 'quantum-ui/Button';
import { useTheme } from 'quantum-ui';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Always render the same structure to prevent hydration mismatch
  return (
    <Button
      intent="secondary"
      onClick={mounted ? toggleColorScheme : undefined}
      disabled={!mounted}
      sx={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 1000,
        minWidth: 'auto',
        borderRadius: '50%',
        width: '48px',
        height: '48px',
        fontSize: '1.2rem'
      }}
    >
      {mounted ? (colorScheme === 'light' ? '🌙' : '☀️') : '⏳'}
    </Button>
  );
}