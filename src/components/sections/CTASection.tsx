'use client';

import { Typography } from 'quantum-ui/Typography';
import { Paper } from 'quantum-ui/Paper';
import { Button } from 'quantum-ui/Button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PRICING_CONTENT } from '@/lib/constants/content';
import GradientText from '@/components/ui/GradientText';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/utils/animations';

export default function CTASection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background with gradient and animation */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
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
      />

      <Paper
        variant="subtle"
        sx={{
          py: 8,
          px: 2,
          position: 'relative',
          backgroundColor: 'transparent',
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          {/* Main Headline */}
          <motion.div variants={staggerItem}>
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
          </motion.div>

          {/* Subheadline */}
          <motion.div variants={staggerItem}>
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
          </motion.div>

          {/* Pricing Preview Card */}
          <motion.div
            variants={staggerItem}
            style={{ marginBottom: '3rem' }}
          >
            <Paper
              variant="glass"
              sx={{
                p: 4,
                backgroundColor: 'var(--quantum-color-surface-glass)',
                backdropFilter: 'blur(20px)',
                border: '2px solid var(--quantum-color-border-glass)',
                borderRadius: '20px',
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

              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
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
              </motion.div>

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
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: '2rem',
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
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
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
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
            </motion.div>
          </motion.div>

          {/* Guarantee Text */}
          <motion.div variants={staggerItem}>
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
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={staggerItem}
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
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                style={{ fontSize: '1.5rem' }}
              >
                ✅
              </motion.div>
              <Typography
                variant="body2"
                intent="secondary"
              >
                No Technical Knowledge Required
              </Typography>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                style={{ fontSize: '1.5rem' }}
              >
                🔒
              </motion.div>
              <Typography
                variant="body2"
                intent="secondary"
              >
                Your Data Stays Private
              </Typography>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                style={{ fontSize: '1.5rem' }}
              >
                ⚡
              </motion.div>
              <Typography
                variant="body2"
                intent="secondary"
              >
                Setup in 5 Minutes
              </Typography>
            </div>
          </motion.div>
        </motion.div>
      </Paper>
    </section>
  );
}