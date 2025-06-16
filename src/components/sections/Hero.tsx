'use client';

import { Button } from '@vritti/quantum-ui/Button';
import { Paper } from '@vritti/quantum-ui/Paper';
import { Typography } from '@vritti/quantum-ui/Typography';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HERO_CONTENT } from '@/lib/constants/content';
import GradientText from '@/components/ui/GradientText';
import { fadeInUp, fadeInDown, staggerContainer, staggerItem } from '@/lib/utils/animations';

export default function Hero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--quantum-color-background-brand)',
          zIndex: -2,
        }}
      />

      {/* Animated background particles */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
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
            radial-gradient(circle at 20% 80%, var(--quantum-color-accent-alpha-15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, var(--quantum-color-accent-alpha-15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, var(--quantum-color-accent-alpha-10) 0%, transparent 50%)
          `,
          zIndex: -1,
        }}
      />

      <Paper
        variant="standard"
        sx={{
          background: 'transparent',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          pt: 8,
          pb: 6,
          px: 2,
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
            width: '100%',
            position: 'relative',
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
          </motion.div>

          {/* Subheadline */}
          <motion.div variants={staggerItem}>
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
              marginBottom: '3rem',
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
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
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
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
            </motion.div>
          </motion.div>

          {/* Hero Dashboard Illustration */}
          <motion.div
            variants={staggerItem}
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '3rem',
            }}
          >
            <motion.div
              style={{
                fontSize: '8rem',
                lineHeight: 1,
                filter: 'drop-shadow(0 10px 30px var(--quantum-color-accent-alpha-20))',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              🚀
            </motion.div>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            variants={staggerItem}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '6rem',
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--quantum-color-status-success)',
                boxShadow: '0 0 20px var(--quantum-color-status-success)',
              }}
            />
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
          </motion.div>

        </motion.div>
      </Paper>
    </section>
  );
}