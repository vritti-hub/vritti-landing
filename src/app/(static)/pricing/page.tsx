'use client';

import { Typography } from 'quantum-ui/Typography';
import { Paper } from 'quantum-ui/Paper';
import { Button } from 'quantum-ui/Button';
import Link from 'next/link';
import { PRICING_CONTENT, FAQ_ITEMS } from '@/lib/constants/content';
import GradientText from '@/components/ui/GradientText';
import AnimatedCard from '@/components/ui/AnimatedCard';

export default function Pricing() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative' }}>
        <Paper
          variant="standard"
          sx={{
            backgroundColor: 'var(--quantum-color-background-brand)',
            py: 8,
            px: 2,
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <GradientText
              variant="h1"
              gradient="hero"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 3,
                intent: 'onPrimary',
              }}
            >
              Simple, Transparent Pricing
            </GradientText>
            
            <Typography
              variant="h3"
              sx={{
                intent: 'secondary',
                fontSize: { xs: '1.125rem', md: '1.25rem' },
                fontWeight: 400,
                mb: 2,
              }}
            >
              No hidden fees. No contracts. Cancel anytime.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                intent: 'secondary',
                fontSize: '1rem',
              }}
            >
              Everything you need to transform your business, in one simple plan.
            </Typography>
          </div>
        </Paper>
      </section>

      {/* Pricing Card */}
      <section>
        <Paper
          variant="standard"
          sx={{
            backgroundColor: 'var(--quantum-color-background-secondary)',
            py: 8,
            px: 2,
          }}
        >
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <AnimatedCard
              variant="glass"
              sx={{
                p: 6,
                textAlign: 'center',
                backgroundColor: 'var(--quantum-color-surface-accent-subtle)',
                border: '2px solid var(--quantum-color-border-accent)',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  intent: 'onPrimary',
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                {PRICING_CONTENT.title}
              </Typography>

              <div style={{ marginBottom: '2rem' }}>
                <Typography
                  variant="h1"
                  sx={{
                    intent: 'success',
                    fontSize: '4rem',
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  {PRICING_CONTENT.monthlyPrice}
                  <Typography
                    component="span"
                    variant="h3"
                    sx={{
                      intent: 'secondary',
                      fontSize: '1.5rem',
                      fontWeight: 400,
                    }}
                  >
                    /month
                  </Typography>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    intent: 'secondary',
                    mb: 2,
                  }}
                >
                  {PRICING_CONTENT.breakdown}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  {PRICING_CONTENT.additionalLocation}
                </Typography>
              </div>

              {/* Features List */}
              <div style={{ marginBottom: '3rem', textAlign: 'left' }}>
                {PRICING_CONTENT.features.map((feature, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <div
                      style={{
                        color: 'var(--quantum-color-status-success)',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                      }}
                    >
                      ✓
                    </div>
                    <Typography
                      variant="body1"
                      sx={{
                        intent: 'secondary',
                        fontSize: '1rem',
                      }}
                    >
                      {feature}
                    </Typography>
                  </div>
                ))}
              </div>

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
                  mb: 2,
                  '&:hover': {
                    backgroundColor: 'var(--quantum-color-status-success-hover)',
                    transform: 'translateY(-2px)',
                  },
                }}
                fullWidth
              >
                Get Early Access
              </Button>

              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.9rem',
                }}
              >
                {PRICING_CONTENT.guarantee}
              </Typography>
            </AnimatedCard>
          </div>
        </Paper>
      </section>

      {/* FAQ Section */}
      <section>
        <Paper
          variant="standard"
          sx={{
            backgroundColor: 'var(--quantum-color-background-secondary)',
            py: 8,
            px: 2,
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Typography
              variant="h2"
              sx={{
                intent: 'onPrimary',
                fontWeight: 600,
                mb: 6,
                textAlign: 'center',
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Frequently Asked Questions
            </Typography>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {FAQ_ITEMS.map((faq, index) => (
                <AnimatedCard
                  key={index}
                  variant="elevated"
                  delay={index * 0.1}
                  sx={{
                    p: 4,
                    backgroundColor: 'var(--quantum-color-surface-subtle)',
                    border: '1px solid var(--quantum-color-border-subtle)',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      intent: 'accent',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {faq.question}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      intent: 'secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </Paper>
      </section>
    </div>
  );
}