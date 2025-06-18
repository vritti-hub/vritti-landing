'use client';

import { Typography } from '@vritti/quantum-ui/Typography';
import { Paper } from '@vritti/quantum-ui/Paper';
import { PAIN_POINTS } from '@/lib/constants/content';
import FeatureCard from '@/components/ui/FeatureCard';
import GradientText from '@/components/ui/GradientText';
import { Animated, Stagger } from '@/components/ui/Animated';

export default function PainPoints() {
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
              gradient="primary"
              sx={{
                fontSize: {
                  xs: '2rem',
                  sm: '2.5rem',
                  md: '3rem',
                },
                mb: 3,
              }}
            >
              Still Running Your Business Like It's 2010?
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
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              These daily frustrations are costing you time, money, and customers. 
              Sound familiar?
            </Typography>
          </Animated>

          {/* Pain Points Grid */}
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
            {PAIN_POINTS.map((point, index) => (
              <Animated
                key={index}
                animation="fadeInUp"
                config={{ delay: 150 + (index * 100) }}
              >
                <FeatureCard
                  title={point.title}
                  description={point.description}
                  icon={point.icon}
                />
              </Animated>
            ))}
          </div>

          {/* Bottom CTA */}
          <Animated animation="fadeInUp" config={{ delay: 500 }}>
            <Paper variant="accent" style={{ textAlign: 'center' }}>
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
                What if there was a better way?
              </Typography>
              <Typography
                variant="body1"
                intent="secondary"
                sx={{
                  fontSize: '1.125rem',
                  maxWidth: '500px',
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                Imagine having an AI business partner that handles all of this automatically, 
                so you can focus on what matters most – growing your business.
              </Typography>
            </Paper>
          </Animated>
        </Stagger>
      </Paper>
    </section>
  );
}