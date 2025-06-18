'use client';

import { Typography } from '@vritti/quantum-ui/Typography';
import { Paper } from '@vritti/quantum-ui/Paper';
import { Button } from '@vritti/quantum-ui/Button';
import Link from 'next/link';
import { HOW_IT_WORKS_STEPS } from '@/lib/constants/content';
import GradientText from '@/components/ui/GradientText';

export default function HowItWorks() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'var(--quantum-color-background-brand)',
            zIndex: -1,
          }}
        />

        <Paper
          variant="section"
          sx={{
            background: 'transparent',
            py: 8,
            px: 2,
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <GradientText
              variant="h1"
              gradient="hero"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                mb: 3,
              }}
            >
              From Chaos to AI Control in 5 Steps
            </GradientText>
            
            <Typography
              variant="h3"
              intent="secondary"
              sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                fontWeight: 400,
                mb: 6,
                maxWidth: '700px',
                mx: 'auto',
              }}
            >
              See how Vritti transforms your business operations from WhatsApp chaos to intelligent automation
            </Typography>
          </div>
        </Paper>
      </section>

      {/* Steps Section */}
      <section>
        <Paper
          variant="section"
          sx={{
            backgroundColor: 'var(--quantum-color-background-secondary)',
            py: 8,
            px: 2,
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              {HOW_IT_WORKS_STEPS.map((step, index) => (
                <div
                  key={step.step}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                    gap: '3rem',
                    alignItems: 'center',
                  }}
                >
                  {/* Content */}
                  <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                    <Paper
                      variant="feature" glass
                      sx={{
                        p: 4,
                        backgroundColor: 'var(--quantum-color-surface-accent-subtle)',
                        border: '1px solid var(--quantum-color-border-accent)',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          marginBottom: '1.5rem',
                        }}
                      >
                        <div
                          style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'var(--quantum-color-action-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Typography
                            variant="h4"
                            intent="primary"
                            sx={{
                              fontSize: '1.5rem',
                              fontWeight: 'bold',
                            }}
                          >
                            {step.step}
                          </Typography>
                        </div>
                        <Typography
                          variant="h3"
                          intent="primary"
                          sx={{ fontWeight: 600 }}
                        >
                          {step.title}
                        </Typography>
                      </div>

                      <Typography
                        variant="h4"
                        intent="brand"
                        sx={{
                          fontWeight: 500,
                          mb: 2,
                        }}
                      >
                        {step.description}
                      </Typography>

                      <Typography
                        variant="body1"
                        intent="secondary"
                        sx={{
                          lineHeight: 1.6,
                        }}
                      >
                        {step.details}
                      </Typography>
                    </Paper>
                  </div>

                  {/* Visual */}
                  <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
                    <Paper
                      variant="feature" glass
                      sx={{
                        p: 4,
                        textAlign: 'center',
                        backgroundColor: 'var(--quantum-color-surface-subtle)',
                        minHeight: '300px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                        {step.step === 1 && '🚀'}
                        {step.step === 2 && '💬'}
                        {step.step === 3 && '🤖'}
                        {step.step === 4 && '📱'}
                        {step.step === 5 && '📊'}
                      </div>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontStyle: 'italic',
                        }}
                      >
                        Step {step.step} Visualization
                      </Typography>
                    </Paper>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Paper>
      </section>

      {/* CTA Section */}
      <section>
        <Paper
          variant="section"
          sx={{
            backgroundColor: 'var(--quantum-color-background-brand)',
            py: 8,
            px: 2,
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Typography
              variant="h2"
              sx={{
                intent: 'onPrimary',
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 600,
                mb: 3,
              }}
            >
              Ready to Get Started?
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                intent: 'secondary',
                fontSize: '1.125rem',
                mb: 4,
                lineHeight: 1.6,
              }}
            >
              Join hundreds of small businesses already transforming their operations with Vritti AI. 
              Setup takes just 5 minutes, and you'll see results immediately.
            </Typography>

            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Button
                intent="primary"
                size="large"
                component={Link}
                href="/contact"
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: '1.125rem',
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: '#0066ff',
                  '&:hover': {
                    background: 'white',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Start Your Transformation
              </Button>

              <Button
                intent="secondary"
                size="large"
                component={Link}
                href="/pricing"
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: '1.125rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  intent: 'onPrimary',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                View Pricing
              </Button>
            </div>
          </div>
        </Paper>
      </section>
    </div>
  );
}