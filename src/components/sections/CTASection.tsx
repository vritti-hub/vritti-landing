'use client';

import { Typography } from '@vritti/quantum-ui/Typography';
import { Paper } from '@vritti/quantum-ui/Paper';
import { Button } from '@vritti/quantum-ui/Button';
import Link from 'next/link';
import { PRICING_CONTENT } from '@/lib/constants/content';
import GradientText from '@/components/ui/GradientText';
import { Animated, Stagger, Continuous, Hover } from '@/components/ui/Animated';

export default function CTASection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background with gradient and animation */}
      <Continuous
        animation="gradientShift"
        as="div"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--quantum-color-background-brand-gradient)',
          backgroundSize: '400% 400%',
          zIndex: -1,
        }}
      >
        <div />
      </Continuous>

      <Paper
        variant="section"
        fullWidth
        sx={{
          position: 'relative',
          backgroundColor: 'transparent',
        }}
      >
        <Stagger
          staggerDelay={0.15}
          config={{ delay: 200, threshold: 0.1, rootMargin: '-100px' }}
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            textAlign: 'center',
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
                  sm: '3rem',
                  md: '4rem',
                },
                mb: 3,
              }}
            >
              Ready to Transform Your Business?
            </GradientText>
          </Animated>

          {/* Subheadline */}
          <Animated animation="fadeInUp" config={{ delay: 150 }}>
            <Typography
              variant="h3"
              intent="primary"
              sx={{
                fontSize: {
                  xs: '1.25rem',
                  md: '1.5rem',
                },
                fontWeight: 400,
                mb: 4,
                lineHeight: 1.5,
              }}
            >
              Join hundreds of small businesses already transforming their operations with AI
            </Typography>
          </Animated>

          {/* Pricing Preview Card */}
          <Animated 
            animation="fadeInUp" 
            config={{ delay: 300 }}
            style={{ marginBottom: '3rem' }}
          >
            <Paper
              variant="feature"
              glass
              sx={{
                maxWidth: '400px',
                mx: 'auto',
              }}
            >
              <Typography
                variant="h3"
                intent="primary"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                {PRICING_CONTENT.title}
              </Typography>

              <Continuous animation="pulse">
                <Typography
                  variant="h2"
                  intent="success"
                  sx={{
                    fontSize: '3rem',
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  {PRICING_CONTENT.monthlyPrice}
                  <Typography
                    component="span"
                    variant="h4"
                    intent="secondary"
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 400,
                    }}
                  >
                    /month
                  </Typography>
                </Typography>
              </Continuous>

              <Typography
                variant="body1"
                intent="secondary"
                sx={{
                  mb: 3,
                }}
              >
                {PRICING_CONTENT.breakdown}
              </Typography>

              <Typography
                variant="body2"
                intent="secondary"
                sx={{
                  opacity: 0.8,
                }}
              >
                {PRICING_CONTENT.additionalLocation}
              </Typography>
            </Paper>
          </Animated>

          {/* CTA Buttons */}
          <Animated 
            animation="fadeInUp" 
            config={{ delay: 450 }}
            style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: '2rem',
            }}
          >
            <Hover animation="hoverLift">
              <Button
                intent="primary"
                size="large"
                component={Link}
                href="/contact"
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  backgroundColor: 'var(--quantum-color-status-success)',
                  color: 'var(--quantum-color-text-on-success)',
                  '&:hover': {
                    backgroundColor: 'var(--quantum-color-status-success-hover)',
                    boxShadow: '0 15px 35px var(--quantum-color-status-success-alpha-40)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Get Early Access
              </Button>
            </Hover>

            <Hover animation="hoverLift">
              <Button
                intent="secondary"
                size="large"
                component={Link}
                href="/pricing"
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  backgroundColor: 'var(--quantum-color-surface-glass)',
                  border: '2px solid var(--quantum-color-border-glass)',
                  '&:hover': {
                    backgroundColor: 'var(--quantum-color-surface-glass-hover)',
                    borderColor: 'var(--quantum-color-border-glass-hover)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                View Full Pricing
              </Button>
            </Hover>
          </Animated>

          {/* Guarantee Text */}
          <Animated animation="fadeInUp" config={{ delay: 600 }}>
            <Typography
              variant="body1"
              intent="secondary"
              sx={{
                fontSize: '1rem',
                mb: 3,
              }}
            >
              {PRICING_CONTENT.guarantee}
            </Typography>
          </Animated>

          {/* Trust Indicators */}
          <Animated 
            animation="fadeInUp" 
            config={{ delay: 750 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
              rowGap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Continuous animation="pulse">
                <div style={{ fontSize: '1.5rem' }}>
                  ✅
                </div>
              </Continuous>
              <Typography
                variant="body2"
                intent="secondary"
              >
                No Technical Knowledge Required
              </Typography>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Continuous animation="pulse">
                <div style={{ fontSize: '1.5rem' }}>
                  🔒
                </div>
              </Continuous>
              <Typography
                variant="body2"
                intent="secondary"
              >
                Your Data Stays Private
              </Typography>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Continuous animation="pulse">
                <div style={{ fontSize: '1.5rem' }}>
                  ⚡
                </div>
              </Continuous>
              <Typography
                variant="body2"
                intent="secondary"
              >
                Setup in 5 Minutes
              </Typography>
            </div>
          </Animated>
        </Stagger>
      </Paper>
    </section>
  );
}