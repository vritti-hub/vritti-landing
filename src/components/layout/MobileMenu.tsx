'use client';

import { NAVIGATION_ITEMS, SITE_CONFIG } from '@/lib/constants/content';
import { Button } from '@vritti/quantum-ui/Button';
import { Paper } from '@vritti/quantum-ui/Paper';
import { Typography } from '@vritti/quantum-ui/Typography';
import Link from 'next/link';

import { Animated, Hover } from '@/components/ui/Animated';
import { ThemeToggle } from '@vritti/quantum-ui/ThemeToggle';
import { useEffect, useState } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsAnimating(true);
    } else if (shouldRender) {
      setIsAnimating(false);
      // Delay unmounting to allow exit animation
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  return (
    <div>
      {shouldRender && (
        <>
          {/* Overlay */}
          <div
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'var(--quantum-color-overlay)',
              zIndex: 60,
              backdropFilter: 'blur(4px)',
              opacity: isAnimating ? 1 : 0,
              transition: 'opacity 0.3s ease',
              pointerEvents: isAnimating ? 'auto' : 'none',
            }}
          />

          {/* Menu Panel */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '300px',
              maxWidth: '85vw',
              zIndex: 70,
              transform: isAnimating ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 0.3s cubic-bezier(0.6, -0.05, 0.01, 0.99)',
            }}
          >
            <Paper
              variant='minimal'
              nav
              sx={{
                height: '100%',
                borderRadius: 0,
                borderLeft: '1px solid var(--quantum-color-border-glass)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Header */}
              <div
                style={{
                  padding: '2rem',
                  borderBottom: '1px solid var(--quantum-color-border-glass)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  variant='h4'
                  sx={{
                    background: 'var(--quantum-color-text-brand-gradient)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 700,
                  }}
                >
                  {SITE_CONFIG.name}
                </Typography>

                <Hover animation='hoverScale'>
                  <button
                    onClick={onClose}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    aria-label='Close menu'
                  >
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <line x1='18' y1='6' x2='6' y2='18'></line>
                      <line x1='6' y1='6' x2='18' y2='18'></line>
                    </svg>
                  </button>
                </Hover>
              </div>

              {/* Navigation Items */}
              <nav
                style={{
                  flex: 1,
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {NAVIGATION_ITEMS.map((item, index) => (
                  <Animated
                    key={item.href}
                    animation='slideInRight'
                    config={{
                      delay: isAnimating ? 200 + index * 100 : 0,
                      duration: 300,
                    }}
                  >
                    <Link href={item.href} onClick={onClose} style={{ textDecoration: 'none' }}>
                      <div
                        style={{
                          padding: '1rem',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--quantum-color-surface-accent-subtle)';
                          e.currentTarget.style.transform = 'translateX(10px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        <Typography
                          variant='h4'
                          sx={{
                            color: 'text.primary',
                            fontWeight: 600,
                            transition: 'color 0.3s ease',
                            '&:hover': {
                              color: 'primary.main',
                            },
                          }}
                        >
                          {item.label}
                        </Typography>
                      </div>
                    </Link>
                  </Animated>
                ))}
              </nav>

              {/* Theme Toggle Section */}
              <Animated
                animation='slideInRight'
                config={{
                  delay: isAnimating ? 200 + NAVIGATION_ITEMS.length * 100 : 0,
                  duration: 300,
                }}
                style={{
                  padding: '2rem',
                  borderTop: '1px solid var(--quantum-color-border-glass)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  variant='h4'
                  sx={{
                    color: 'var(--quantum-color-text-on-surface)',
                    fontWeight: 600,
                  }}
                >
                  Theme
                </Typography>
                <ThemeToggle />
              </Animated>

              {/* CTA Section */}
              <Animated
                animation='slideInRight'
                config={{
                  delay: isAnimating ? 300 + NAVIGATION_ITEMS.length * 100 : 0,
                  duration: 300,
                }}
                style={{
                  padding: '2rem',
                  borderTop: '1px solid var(--quantum-color-border-glass)',
                }}
              >
                <Button intent='primary' size='large' fullWidth component={Link} href='/contact' onClick={onClose}>
                  Get Early Access
                </Button>
              </Animated>
            </Paper>
          </div>
        </>
      )}
    </div>
  );
}
