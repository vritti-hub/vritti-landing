'use client';

import { Typography } from 'quantum-ui/Typography';
import { Paper } from 'quantum-ui/Paper';
import { motion } from 'framer-motion';
import { SOLUTION_FEATURES } from '@/lib/constants/content';
import FeatureCard from '@/components/ui/FeatureCard';
import GradientText from '@/components/ui/GradientText';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/utils/animations';

export default function SolutionOverview() {
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
          </motion.div>

          {/* Features Grid */}
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
            {SOLUTION_FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  details={feature.details}
                  icon={feature.icon}
                  delay={index * 0.1}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive Demo Placeholder */}
          <motion.div
            variants={fadeInUp}
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
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear',
              }}
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
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{ fontSize: '4rem', marginBottom: '1rem' }}
              >
                🚀
              </motion.div>
              
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

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
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
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Paper>
    </section>
  );
}