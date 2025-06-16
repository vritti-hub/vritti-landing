'use client';

import { Typography } from '@vritti/quantum-ui/Typography';
import { Paper } from '@vritti/quantum-ui/Paper';
import { motion } from 'framer-motion';
import { MISSION_CONTENT, STATS } from '@/lib/constants/content';
import GradientText from '@/components/ui/GradientText';
import AnimatedCard from '@/components/ui/AnimatedCard';


export default function MissionVision() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
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
            background: 'var(--quantum-color-background-brand)',
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(0, 102, 255, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(74, 144, 226, 0.2) 0%, transparent 50%)
            `,
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
              Building the Future of Small Business
            </GradientText>
            
            <Typography
              variant="h3"
              sx={{
                intent: 'secondary',
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                fontWeight: 400,
                mb: 6,
                maxWidth: '700px',
                mx: 'auto',
              }}
            >
              Every small business deserves enterprise-grade intelligence. We're making that a reality.
            </Typography>
          </div>
        </Paper>
      </section>

      {/* Mission Section */}
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
            <AnimatedCard
              variant="glass"
              sx={{
                p: 6,
                textAlign: 'center',
                background: 'rgba(0, 102, 255, 0.1)',
                border: '2px solid rgba(0, 102, 255, 0.3)',
                mb: 6,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  intent: 'onPrimary',
                  fontWeight: 600,
                  mb: 4,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                Our Mission
              </Typography>
              
              <Typography
                variant="h3"
                sx={{
                  intent: 'secondary',
                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  maxWidth: '800px',
                  mx: 'auto',
                  fontStyle: 'italic',
                }}
              >
                "{MISSION_CONTENT.mission}"
              </Typography>
            </AnimatedCard>

            {/* Mission Pillars */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
              }}
            >
              {[
                {
                  icon: '🎯',
                  title: 'Accessibility First',
                  description: 'Making enterprise-grade AI accessible to every small business owner, regardless of technical background.',
                },
                {
                  icon: '🤝',
                  title: 'Human-Centered Design',
                  description: 'Building AI that augments human intelligence rather than replacing human connection.',
                },
                {
                  icon: '🚀',
                  title: 'Continuous Innovation',
                  description: 'Constantly evolving our platform to stay ahead of small business needs.',
                },
              ].map((pillar, index) => (
                <AnimatedCard
                  key={index}
                  variant="elevated"
                  delay={index * 0.2}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    backgroundColor: 'var(--quantum-color-surface-subtle)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    {pillar.icon}
                  </div>
                  <Typography
                    variant="h3"
                    sx={{ color: 'white', fontWeight: 600, mb: 2 }}
                  >
                    {pillar.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}
                  >
                    {pillar.description}
                  </Typography>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </Paper>
      </section>

      {/* Vision Section */}
      <section>
        <Paper
          variant="standard"
          sx={{
            background: 'linear-gradient(180deg, #16213e 0%, #0f0f23 100%)',
            py: 8,
            px: 2,
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <AnimatedCard
              variant="glass"
              sx={{
                p: 6,
                textAlign: 'center',
                background: 'rgba(74, 144, 226, 0.1)',
                border: '2px solid rgba(74, 144, 226, 0.3)',
                mb: 6,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  intent: 'onPrimary',
                  fontWeight: 600,
                  mb: 4,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                Our Vision
              </Typography>
              
              <Typography
                variant="h3"
                sx={{
                  intent: 'secondary',
                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                  fontWeight: 400,
                  lineHeight: 1.6,
                  maxWidth: '800px',
                  mx: 'auto',
                  fontStyle: 'italic',
                }}
              >
                "{MISSION_CONTENT.vision}"
              </Typography>
            </AnimatedCard>

            {/* Impact Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
              }}
            >
              {[
                { stat: STATS.waitlistCount, label: 'Businesses on Waitlist' },
                { stat: STATS.industriesSupported, label: 'Industries Supported' },
                { stat: STATS.revenueManaged, label: 'Revenue Managed' },
                { stat: STATS.hoursSaved, label: 'Hours Saved Weekly' },
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
                    sx={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500 }}
                  >
                    {item.label}
                  </Typography>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </Paper>
      </section>

      {/* Why Vritti Section */}
      <section>
        <Paper
          variant="standard"
          sx={{
            background: 'linear-gradient(180deg, #0f0f23 0%, #1a1a2e 100%)',
            py: 8,
            px: 2,
          }}
        >
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                intent: 'onPrimary',
                fontWeight: 600,
                mb: 4,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Why "Vritti"?
            </Typography>

            <AnimatedCard
              variant="glass"
              sx={{
                p: 6,
                background: 'rgba(0, 102, 255, 0.05)',
                border: '1px solid rgba(0, 102, 255, 0.2)',
                mb: 4,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  intent: 'secondary',
                  fontSize: '1.125rem',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                }}
              >
                {MISSION_CONTENT.vritteMeaning}
              </Typography>
            </AnimatedCard>

            {/* Values Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
                marginTop: '4rem',
              }}
            >
              {MISSION_CONTENT.values.map((value, index) => (
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
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      intent: 'secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {value.description}
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