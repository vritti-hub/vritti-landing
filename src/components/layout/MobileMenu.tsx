'use client';

import { Button } from 'quantum-ui/Button';
import { Paper } from 'quantum-ui/Paper';
import { Typography } from 'quantum-ui/Typography';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { NAVIGATION_ITEMS, SITE_CONFIG } from '@/lib/constants/content';
import ThemeToggle from '@/components/ui/ThemeToggle';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const overlayVariants = {
    closed: {
      opacity: 0,
      pointerEvents: 'none' as const,
    },
    open: {
      opacity: 1,
      pointerEvents: 'auto' as const,
      transition: {
        duration: 0.3,
      },
    },
  };

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    open: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 20,
    },
    open: {
      opacity: 1,
      x: 0,
    },
  };

  const containerVariants = {
    closed: {},
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
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
            }}
          />

          {/* Menu Panel */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '300px',
              maxWidth: '85vw',
              zIndex: 70,
            }}
          >
            <Paper
              variant="glass"
              sx={{
                height: '100%',
                backgroundColor: 'var(--quantum-color-surface-glass)',
                backdropFilter: 'blur(20px)',
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
                  variant="h4" 
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

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
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
                  aria-label="Close menu"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </motion.button>
              </div>

              {/* Navigation Items */}
              <motion.nav
                variants={containerVariants}
                initial="closed"
                animate="open"
                style={{
                  flex: 1,
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {NAVIGATION_ITEMS.map((item, index) => (
                  <motion.div key={item.href} variants={itemVariants}>
                    <Link 
                      href={item.href} 
                      onClick={onClose}
                      style={{ textDecoration: 'none' }}
                    >
                      <motion.div
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          padding: '1rem',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          transition: 'background-color 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--quantum-color-surface-accent-subtle)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <Typography 
                          variant="h4"
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
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Theme Toggle Section */}
              <motion.div
                variants={itemVariants}
                style={{
                  padding: '2rem',
                  borderTop: '1px solid var(--quantum-color-border-glass)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography 
                  variant="h4"
                  sx={{
                    color: 'var(--quantum-color-text-on-surface)',
                    fontWeight: 600,
                  }}
                >
                  Theme
                </Typography>
                <ThemeToggle />
              </motion.div>

              {/* CTA Section */}
              <motion.div
                variants={itemVariants}
                style={{
                  padding: '2rem',
                  borderTop: '1px solid var(--quantum-color-border-glass)',
                }}
              >
                <Button 
                  intent="primary" 
                  size="large"
                  fullWidth
                  component={Link}
                  href="/contact"
                  onClick={onClose}
                >
                  Get Early Access
                </Button>
              </motion.div>
            </Paper>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}