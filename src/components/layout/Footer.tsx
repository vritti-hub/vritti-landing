'use client';

import { Paper } from '@vritti/quantum-ui/Paper';
import { Typography } from '@vritti/quantum-ui/Typography';
import { Button } from '@vritti/quantum-ui/Button';
import Link from 'next/link';
import { SITE_CONFIG, NAVIGATION_ITEMS, CONTACT_INFO } from '@/lib/constants/content';
import { Animated, Stagger, Hover } from '@/components/ui/Animated';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Paper
      variant="section"
      sx={{
        backgroundColor: 'var(--quantum-color-background-brand)',
        borderRadius: 0,
        mt: 'auto',
      }}
    >
      <Stagger
        staggerDelay={0.15}
        config={{ delay: 200, threshold: 0.1, rootMargin: '-100px' }}
        as="footer"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 2rem 2rem',
        }}
      >
        {/* Main Footer Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          {/* Company Info */}
          <Animated animation="fadeInUp" config={{ delay: 0 }}>
            <Typography 
              variant="h3" 
              intent="brand"
              sx={{
                fontWeight: 700,
                mb: 2,
              }}
            >
              {SITE_CONFIG.name}
            </Typography>
            <Typography 
              variant="body1" 
              intent="secondary"
              sx={{ 
                mb: 3,
                maxWidth: '300px',
              }}
            >
              {SITE_CONFIG.description}. Transforming small businesses through intelligent automation.
            </Typography>
            
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Hover animation="hoverLift">
                <a
                  href={CONTACT_INFO.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--quantum-color-surface-glass)',
                    color: 'var(--quantum-color-text-on-brand)',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--quantum-color-action-primary-alpha-30)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--quantum-color-surface-glass)';
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </Hover>
              
              <Hover animation="hoverLift">
                <a
                  href={CONTACT_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--quantum-color-surface-glass)',
                    color: 'var(--quantum-color-text-on-brand)',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--quantum-color-action-primary-alpha-30)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--quantum-color-surface-glass)';
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </Hover>
            </div>
          </Animated>

          {/* Quick Links */}
          <Animated animation="fadeInUp" config={{ delay: 150 }}>
            <Typography 
              variant="h4" 
              sx={{ 
                color: 'white', 
                fontWeight: 600, 
                mb: 2 
              }}
            >
              Quick Links
            </Typography>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {NAVIGATION_ITEMS.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={{
                      transition: 'transform 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <Typography 
                      variant="body1"
                      sx={{
                        color: 'var(--quantum-color-text-secondary)',
                        cursor: 'pointer',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: 'var(--quantum-color-text-accent)',
                        },
                      }}
                    >
                      {item.label}
                    </Typography>
                  </div>
                </Link>
              ))}
            </nav>
          </Animated>

          {/* Contact Info */}
          <Animated animation="fadeInUp" config={{ delay: 300 }}>
            <Typography 
              variant="h4" 
              sx={{ 
                color: 'white', 
                fontWeight: 600, 
                mb: 2 
              }}
            >
              Contact
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Typography 
                variant="body1"
                sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                📧 {CONTACT_INFO.email}
              </Typography>
              <Typography 
                variant="body1"
                sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                📱 {CONTACT_INFO.whatsapp}
              </Typography>
              <Typography 
                variant="body1"
                sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                📍 {CONTACT_INFO.address}
              </Typography>
            </div>
          </Animated>

          {/* Newsletter/CTA */}
          <Animated animation="fadeInUp" config={{ delay: 450 }}>
            <Typography 
              variant="h4" 
              sx={{ 
                color: 'white', 
                fontWeight: 600, 
                mb: 2 
              }}
            >
              Stay Updated
            </Typography>
            <Typography 
              variant="body1"
              sx={{ 
                color: 'var(--quantum-color-text-secondary)', 
                mb: 3 
              }}
            >
              Get the latest updates on Vritti AI and be first to know when we launch.
            </Typography>
            <Button 
              intent="secondary" 
              size="medium"
              component={Link}
              href="/contact"
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'var(--quantum-color-action-primary-alpha-30)',
                },
              }}
            >
              Join Waitlist
            </Button>
          </Animated>
        </div>

        {/* Bottom Bar */}
        <Animated 
          animation="fadeInUp" 
          config={{ delay: 600 }}
          style={{
            borderTop: '1px solid var(--quantum-color-border-glass)',
            paddingTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '2rem',
              alignItems: 'center' 
            }}
          >
            <Link href="/privacy" style={{ textDecoration: 'none' }}>
              <Typography 
                variant="body2"
                sx={{
                  color: 'var(--quantum-color-text-disabled)',
                  '&:hover': { color: '#0066ff' },
                  transition: 'color 0.3s ease',
                }}
              >
                Privacy Policy
              </Typography>
            </Link>
            <Link href="/terms" style={{ textDecoration: 'none' }}>
              <Typography 
                variant="body2"
                sx={{
                  color: 'var(--quantum-color-text-disabled)',
                  '&:hover': { color: '#0066ff' },
                  transition: 'color 0.3s ease',
                }}
              >
                Terms of Service
              </Typography>
            </Link>
          </div>
          
          <Typography 
            variant="body2"
            sx={{ 
              color: 'rgba(255, 255, 255, 0.6)',
              textAlign: 'center',
            }}
          >
            © {currentYear} {SITE_CONFIG.name}. Empowering Small Businesses.
          </Typography>
        </Animated>
      </Stagger>
    </Paper>
  );
}