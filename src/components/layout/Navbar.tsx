'use client';

import { Button } from '@vritti/quantum-ui/Button';
import { Paper } from '@vritti/quantum-ui/Paper';
import { Typography } from '@vritti/quantum-ui/Typography';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { NAVIGATION_ITEMS, SITE_CONFIG } from '@/lib/constants/content';
import MobileMenu from './MobileMenu';
import ResponsiveWrapper from '@/components/ui/ResponsiveWrapper';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { Hover } from '@/components/ui/Animated';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          borderBottom: '1px solid var(--quantum-color-border-glass)',
        }}
      >
        <Paper 
          variant="minimal"
          nav
          sx={{ 
            borderRadius: 0,
            backgroundColor: isScrolled ? 'var(--quantum-color-surface-glass)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(20px)' : 'none',
            transition: 'all 0.3s ease',
          }}
        >
          <div 
            style={{ 
              maxWidth: '1200px', 
              margin: '0 auto', 
              padding: '1rem 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Hover animation="hoverScale">
                <Image
                  src="/vritti-logo.png"
                  alt="Vritti Logo"
                  width={100}
                  height={40}
                  priority
                />
              </Hover>
            </Link>

            {/* Desktop Navigation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <ResponsiveWrapper breakpoint={768} showAbove={true}>
                <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                  {NAVIGATION_ITEMS.map((item) => (
                    <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
                      <div
                        style={{
                          transition: 'transform 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <Typography 
                          variant="body1"
                          sx={{
                            color: 'text.primary',
                            fontWeight: 500,
                            cursor: 'pointer',
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
                  ))}
                </nav>
              </ResponsiveWrapper>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* CTA Button */}
              <ResponsiveWrapper breakpoint={768} showAbove={true}>
                <Hover animation="hoverScale">
                  <Button 
                    intent="primary" 
                    size="medium"
                    component={Link}
                    href="/contact"
                  >
                    Get Early Access
                  </Button>
                </Hover>
              </ResponsiveWrapper>

              {/* Mobile Menu Button */}
              <ResponsiveWrapper breakpoint={768} showAbove={false}>
                <Hover animation="hoverScale">
                  <button
                    onClick={() => setIsOpen(true)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '8px',
                    }}
                    aria-label="Open menu"
                  >
                    <span 
                      style={{
                        width: '24px',
                        height: '2px',
                        backgroundColor: 'var(--quantum-color-text-primary)',
                        borderRadius: '1px',
                        transition: 'all 0.3s ease',
                      }}
                    />
                    <span 
                      style={{
                        width: '24px',
                        height: '2px',
                        backgroundColor: 'var(--quantum-color-text-primary)',
                        borderRadius: '1px',
                        transition: 'all 0.3s ease',
                      }}
                    />
                    <span 
                      style={{
                        width: '24px',
                        height: '2px',
                        backgroundColor: 'var(--quantum-color-text-primary)',
                        borderRadius: '1px',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  </button>
                </Hover>
              </ResponsiveWrapper>
            </div>
          </div>
        </Paper>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}