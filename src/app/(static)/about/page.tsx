'use client';

import { Typography } from 'quantum-ui/Typography';
import { Paper } from 'quantum-ui/Paper';
import { Button } from 'quantum-ui/Button';
import Link from 'next/link';
import { STATS } from '@/lib/constants/content';
import GradientText from '@/components/ui/GradientText';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <motion.div
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
          variant="standard"
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
              Empowering Small Businesses with AI
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
              We believe every small business deserves the same technological advantages as Fortune 500 companies.
            </Typography>
          </div>
        </Paper>
      </section>

      {/* Company Story */}
      <section>
        <Paper
          variant="standard"
          sx={{
            backgroundColor: 'var(--quantum-color-background-secondary)',
            py: 8,
            px: 2,
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center',
                marginBottom: '4rem',
              }}
            >
              <AnimatedCard
                variant="glass"
                sx={{
                  p: 4,
                  backgroundColor: 'var(--quantum-color-surface-accent-subtle)',
                  border: '1px solid var(--quantum-color-border-accent)',
                }}
              >
                <Typography
                  variant="h2"
                  intent="primary"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                  }}
                >
                  Our Story
                </Typography>
                
                <Typography
                  variant="body1"
                  intent="secondary"
                  sx={{
                    fontSize: '1.125rem',
                    lineHeight: 1.6,
                    mb: 3,
                  }}
                >
                  Vritti AI was born from a simple observation: while large enterprises have access to sophisticated 
                  business intelligence tools, small businesses are stuck managing operations through WhatsApp, 
                  Excel sheets, and paper records.
                </Typography>

                <Typography
                  variant="body1"
                  intent="secondary"
                  sx={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                  }}
                >
                  We set out to change that by building an AI-powered business operating system that's 
                  powerful enough for any business, yet simple enough for anyone to use.
                </Typography>
              </AnimatedCard>

              <AnimatedCard
                variant="elevated"
                delay={0.2}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  backgroundColor: 'var(--quantum-color-surface-subtle)',
                  minHeight: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div style={{ fontSize: '4rem', marginBottom: '2rem' }}>
                  🏢➡️📱
                </div>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#4A90E2',
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  From Enterprise to Everyone
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: 1.6,
                  }}
                >
                  We're democratizing business intelligence by making enterprise-grade AI accessible 
                  to every small business owner, regardless of technical background.
                </Typography>
              </AnimatedCard>
            </div>

            {/* Timeline */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <Typography
                variant="h2"
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  mb: 4,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                Our Journey
              </Typography>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '2rem',
                }}
              >
                {[
                  {
                    year: '2023',
                    title: 'The Idea',
                    description: 'Recognized the gap between enterprise tools and small business needs',
                  },
                  {
                    year: '2024',
                    title: 'Building',
                    description: 'Developed core AI platform with focus on simplicity and power',
                  },
                  {
                    year: '2024',
                    title: 'Early Access',
                    description: 'Launching with select businesses to refine the experience',
                  },
                  {
                    year: '2025',
                    title: 'Scale',
                    description: 'Expanding to serve thousands of small businesses globally',
                  },
                ].map((milestone, index) => (
                  <AnimatedCard
                    key={index}
                    variant="elevated"
                    delay={index * 0.15}
                    sx={{
                      p: 4,
                      textAlign: 'center',
                      backgroundColor: 'var(--quantum-color-surface-subtle)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        intent: 'accent',
                        fontWeight: 700,
                        fontSize: '2rem',
                        mb: 1,
                      }}
                    >
                      {milestone.year}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      {milestone.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        lineHeight: 1.5,
                      }}
                    >
                      {milestone.description}
                    </Typography>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </Paper>
      </section>

      {/* Stats Section */}
      <section>
        <Paper
          variant="standard"
          sx={{
            backgroundColor: 'var(--quantum-color-background-secondary)',
            py: 8,
            px: 2,
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                fontWeight: 600,
                mb: 6,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Our Impact So Far
            </Typography>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                marginBottom: '4rem',
              }}
            >
              {[
                { stat: STATS.waitlistCount, label: 'Businesses Waiting', icon: '🏢' },
                { stat: STATS.industriesSupported, label: 'Industries Served', icon: '🎯' },
                { stat: STATS.revenueManaged, label: 'Revenue Managed', icon: '💰' },
                { stat: STATS.hoursSaved, label: 'Hours Saved Weekly', icon: '⏰' },
              ].map((item, index) => (
                <AnimatedCard
                  key={index}
                  variant="elevated"
                  delay={index * 0.1}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    backgroundColor: 'var(--quantum-color-surface-subtle)',
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    {item.icon}
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.6, ease: 'backOut' }}
                    viewport={{ once: true }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        intent: 'accent',
                        fontSize: '3rem',
                        fontWeight: 700,
                        mb: 1,
                      }}
                    >
                      {item.stat}
                    </Typography>
                  </motion.div>
                  <Typography
                    variant="body1"
                    intent="secondary"
                sx={{ fontWeight: 500 }}
                  >
                    {item.label}
                  </Typography>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </Paper>
      </section>

      {/* Values & Culture */}
      <section>
        <Paper
          variant="standard"
          sx={{
            backgroundColor: 'var(--quantum-color-background-secondary)',
            py: 8,
            px: 2,
          }}
        >
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                fontWeight: 600,
                mb: 6,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              What Drives Us
            </Typography>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '4rem',
              }}
            >
              {[
                {
                  icon: '🎯',
                  title: 'Customer First',
                  description: 'Every decision is made with our customers\' success in mind.',
                },
                {
                  icon: '🚀',
                  title: 'Innovation',
                  description: 'We constantly push boundaries to solve real business problems.',
                },
                {
                  icon: '🤝',
                  title: 'Accessibility',
                  description: 'Technology should empower everyone, not just technical experts.',
                },
                {
                  icon: '🔒',
                  title: 'Trust',
                  description: 'Your business data is sacred. We protect it like our own.',
                },
              ].map((value, index) => (
                <AnimatedCard
                  key={index}
                  variant="elevated"
                  delay={index * 0.15}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    backgroundColor: 'var(--quantum-color-surface-subtle)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    {value.icon}
                  </div>
                  <Typography
                    variant="h3"
                    sx={{
                      color: '#4A90E2',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      lineHeight: 1.6,
                    }}
                  >
                    {value.description}
                  </Typography>
                </AnimatedCard>
              ))}
            </div>

            {/* CTA */}
            <AnimatedCard
              variant="glass"
              sx={{
                p: 6,
                backgroundColor: 'var(--quantum-color-surface-accent-subtle)',
                border: '2px solid var(--quantum-color-border-accent)',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  mb: 3,
                }}
              >
                Join Our Mission
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '1.125rem',
                  mb: 4,
                  lineHeight: 1.6,
                }}
              >
                Help us democratize business intelligence. Be part of the transformation 
                that's empowering small businesses worldwide.
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
                    backgroundColor: 'var(--quantum-color-status-success)',
                    color: 'var(--quantum-color-text-on-success)',
                  }}
                >
                  Get Early Access
                </Button>
                <Button
                  intent="secondary"
                  size="large"
                  component={Link}
                  href="/mission-vision"
                  sx={{
                    px: 4,
                    py: 2,
                    backgroundColor: 'var(--quantum-color-surface-glass)',
                    border: '1px solid var(--quantum-color-border-glass)',
                  }}
                >
                  Learn More
                </Button>
              </div>
            </AnimatedCard>
          </div>
        </Paper>
      </section>
    </div>
  );
}