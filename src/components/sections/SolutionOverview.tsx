'use client';

import { Typography } from '@vritti/quantum-ui/Typography';
import { Paper } from '@vritti/quantum-ui/Paper';
import { SOLUTION_FEATURES } from '@/lib/constants/content';
import FeatureCard from '@/components/ui/FeatureCard';
import GradientText from '@/components/ui/GradientText';
import { Animated, Stagger, Continuous, Hover } from '@/components/ui/Animated';

export default function SolutionOverview() {
  return (
    <section style={{ position: 'relative' }}>
      <Paper
        variant="section"
        fullWidth
      >
        <Stagger
          staggerDelay={0.15}
          config={{ delay: 200, threshold: 0.1, rootMargin: '-100px' }}
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {/* Section Header */}
          <Animated 
            animation="fadeInUp"
            config={{ delay: 0 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <GradientText
              variant="h2"
              gradient="hero"
              sx={{
                fontSize: {
                  xs: '2rem',
                  sm: '2.5rem',
                  md: '3rem',
                },
                mb: 3,
              }}
            >
              One AI Platform That Runs Everything
            </GradientText>
            <Typography
              variant="h3"
              intent="secondary"
              sx={{
                fontSize: {
                  xs: '1.125rem',
                  md: '1.25rem',
                },
                fontWeight: 400,
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Stop juggling multiple tools and spreadsheets. 
              Vritti AI gives you everything you need in one intelligent system.
            </Typography>
          </Animated>

          {/* Features Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem',
              justifyItems: 'center',
              alignItems: 'start',
            }}
          >
            {SOLUTION_FEATURES.map((feature, index) => (
              <Hover key={index} animation="hoverLift">
                <Animated
                  animation="fadeInUp"
                  config={{ delay: 150 + (index * 100) }}
                >
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    details={feature.details}
                    icon={feature.icon}
                  />
                </Animated>
              </Hover>
            ))}
          </div>

          {/* Interactive Demo Placeholder */}
          <Animated 
            animation="fadeInUp" 
            config={{ delay: 500 }}
            style={{
              backgroundColor: 'var(--quantum-color-surface-accent-subtle)',
              border: '2px dashed var(--quantum-color-border-accent)',
              borderRadius: '20px',
              padding: '4rem 2rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Background animation */}
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
                  radial-gradient(circle at 20% 20%, var(--quantum-color-accent-alpha-10) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, var(--quantum-color-accent-alpha-10) 0%, transparent 50%)
                `,
                zIndex: 0,
              }}
            >
              <div />
            </Continuous>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <Continuous animation="pulse">
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                  🚀
                </div>
              </Continuous>
              
              <Typography
                variant="h3"
                intent="primary"
                sx={{
                  fontSize: {
                    xs: '1.5rem',
                    md: '2rem',
                  },
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Interactive Demo Coming Soon
              </Typography>
              
              <Typography
                variant="body1"
                intent="secondary"
                sx={{
                  fontSize: '1.125rem',
                  maxWidth: '500px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  mb: 3,
                }}
              >
                Experience how Vritti AI transforms your business operations 
                with our interactive demo dashboard.
              </Typography>

              <Continuous animation="float">
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--quantum-color-text-accent)',
                    fontSize: '1rem',
                    fontWeight: 500,
                  }}
                >
                  See it in action soon
                  <span>→</span>
                </div>
              </Continuous>
            </div>
          </Animated>
        </Stagger>
      </Paper>
    </section>
  );
}