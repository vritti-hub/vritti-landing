'use client';

import { Typography } from '@vritti/quantum-ui/Typography';
import { Paper } from '@vritti/quantum-ui/Paper';
import { motion } from 'framer-motion';
import { PAIN_POINTS } from '@/lib/constants/content';
import FeatureCard from '@/components/ui/FeatureCard';
import GradientText from '@/components/ui/GradientText';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/utils/animations';

export default function PainPoints() {
  return (
    <section style={{ position: 'relative' }}>
      <Paper
        variant="standard"
        sx={{
          backgroundColor: 'var(--quantum-color-background-secondary)',
          py: 8,
          px: 2,
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {/* Section Header */}
          <motion.div 
            variants={fadeInUp}
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
          </motion.div>

          {/* Pain Points Grid */}
          <motion.div
            variants={staggerContainer}
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
              <motion.div
                key={index}
                variants={staggerItem}
                custom={index}
              >
                <FeatureCard
                  title={point.title}
                  description={point.description}
                  icon={point.icon}
                  delay={index * 0.1}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeInUp}
            style={{
              textAlign: 'center',
              padding: '3rem 2rem',
              backgroundColor: 'var(--quantum-color-surface-accent-subtle)',
              borderRadius: '20px',
              border: '1px solid var(--quantum-color-border-accent)',
            }}
          >
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
          </motion.div>
        </motion.div>
      </Paper>
    </section>
  );
}