'use client';

import { Button } from '@vritti/quantum-ui/Button';
import { Paper } from '@vritti/quantum-ui/Paper';
import { Typography } from '@vritti/quantum-ui/Typography';
import Link from 'next/link';
import { HERO_CONTENT } from '@/lib/constants/content';
import GradientText from '@/components/ui/GradientText';
import { Animated, Stagger, Continuous, Hover } from '@/components/ui/Animated';

export default function Hero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <Animated 
        animation="fadeIn" 
        config={{ duration: 1500, delay: 0 }}
        as="div"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--quantum-color-background-brand)',
          zIndex: -2,
        }}
      >
        <div />
      </Animated>

      {/* Animated background particles */}
      <Continuous
        animation="backgroundFloat"
        as="div"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 80%, var(--quantum-color-accent-alpha-15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, var(--quantum-color-accent-alpha-15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, var(--quantum-color-accent-alpha-10) 0%, transparent 50%)
          `,
          zIndex: -1,
        }}
      >
        <div />
      </Continuous>

      <Paper
        variant="section"
        fullWidth
        sx={{
          background: 'transparent',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Stagger
          staggerDelay={0.15}
          config={{ delay: 200 }}
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
            width: '100%',
            position: 'relative',
          }}
        >
          {/* Main Headline */}
          <Animated animation="fadeInUp" config={{ delay: 0 }}>
            <GradientText
              variant="h1"
              gradient="hero"
              sx={{
                fontSize: {
                  xs: '2.5rem',
                  sm: '3.5rem',
                  md: '4.5rem',
                  lg: '5.5rem',
                },
                lineHeight: 1.1,
                mb: 3,
                maxWidth: '900px',
                mx: 'auto',
              }}
            >
              {HERO_CONTENT.headline}
            </GradientText>
          </Animated>

          {/* Subheadline */}
          <Animated animation="fadeInUp" config={{ delay: 150 }}>
            <Typography
              variant="h2"
              intent="primary"
              sx={{
                fontSize: {
                  xs: '1.25rem',
                  sm: '1.5rem',
                  md: '1.75rem',
                },
                fontWeight: 400,
                lineHeight: 1.4,
                mb: 4,
                maxWidth: '700px',
                mx: 'auto',
                opacity: 0.9,
              }}
            >
              {HERO_CONTENT.subheadline}
            </Typography>
          </Animated>

          {/* CTA Buttons */}
          <Animated 
            animation="fadeInUp" 
            config={{ delay: 300 }}
            style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: '3rem',
            }}
          >
            <Hover animation="hoverScale">
              <Button
                intent="primary"
                size="large"
                component={Link}
                href="/contact"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  backgroundColor: 'var(--quantum-color-action-primary)',
                  '&:hover': {
                    backgroundColor: 'var(--quantum-color-action-primary-hover)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 25px var(--quantum-color-action-primary-alpha-30)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {HERO_CONTENT.primaryCTA}
              </Button>
            </Hover>

            <Hover animation="hoverScale">
              <Button
                intent="secondary"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  backgroundColor: 'var(--quantum-color-surface-glass)',
                  border: '2px solid var(--quantum-color-border-glass)',
                  '&:hover': {
                    backgroundColor: 'var(--quantum-color-surface-glass-hover)',
                    borderColor: 'var(--quantum-color-border-accent)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {HERO_CONTENT.secondaryCTA}
              </Button>
            </Hover>
          </Animated>

          {/* Hero Dashboard Illustration */}
          <Animated 
            animation="fadeInUp" 
            config={{ delay: 450 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '3rem',
            }}
          >
            <Hover animation="hoverScale">
              <div
                style={{
                  fontSize: '8rem',
                  lineHeight: 1,
                  filter: 'drop-shadow(0 10px 30px var(--quantum-color-accent-alpha-20))',
                }}
              >
                🚀
              </div>
            </Hover>
          </Animated>

          {/* Trust Bar */}
          <Animated 
            animation="fadeInUp" 
            config={{ delay: 600 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '6rem',
            }}
          >
            <Continuous animation="pulse">
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--quantum-color-status-success)',
                  boxShadow: '0 0 20px var(--quantum-color-status-success)',
                }}
              />
            </Continuous>
            <Typography
              variant="body1"
              intent="primary"
              sx={{
                fontSize: '1rem',
                fontWeight: 500,
                opacity: 0.8,
              }}
            >
              {HERO_CONTENT.trustBar}
            </Typography>
          </Animated>

        </Stagger>
      </Paper>
    </section>
  );
}