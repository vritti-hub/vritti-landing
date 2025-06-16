'use client';

import { Button } from 'quantum-ui/Button';
import { Paper } from 'quantum-ui/Paper';
import { Typography } from 'quantum-ui/Typography';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { NAVIGATION_ITEMS, SITE_CONFIG } from '@/lib/constants/content';
import MobileMenu from './MobileMenu';
import ResponsiveWrapper from '@/components/ui/ResponsiveWrapper';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['var(--quantum-color-surface-transparent)', 'var(--quantum-color-surface-glass)']
  );
  
  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(20px)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
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
          variant="standard"
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Typography 
                  variant="h3" 
                  intent="brand"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                  }}
                >
                  {SITE_CONFIG.name}
                </Typography>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <ResponsiveWrapper breakpoint={768} showAbove={true}>
                <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                  {NAVIGATION_ITEMS.map((item) => (
                    <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
                      <motion.div
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
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
                      </motion.div>
                    </Link>
                  ))}
                </nav>
              </ResponsiveWrapper>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* CTA Button */}
              <ResponsiveWrapper breakpoint={768} showAbove={true}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    intent="primary" 
                    size="medium"
                    component={Link}
                    href="/contact"
                  >
                    Get Early Access
                  </Button>
                </motion.div>
              </ResponsiveWrapper>

              {/* Mobile Menu Button */}
              <ResponsiveWrapper breakpoint={768} showAbove={false}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
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
                </motion.button>
              </ResponsiveWrapper>
            </div>
          </div>
        </Paper>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

