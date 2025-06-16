'use client';

import { Paper } from 'quantum-ui/Paper';
import { motion } from 'framer-motion';
import { hoverLift } from '@/lib/utils/animations';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  variant?: 'standard' | 'elevated' | 'glass' | 'glassCard' | 'glassCardHover' | 'interactive' | 'overlay' | 'subtle';
  className?: string;
  delay?: number;
  onClick?: () => void;
  href?: string;
  sx?: Record<string, unknown>;
}

export default function AnimatedCard({
  children,
  variant = 'elevated',
  className,
  delay = 0,
  onClick,
  href,
  sx = {},
}: AnimatedCardProps) {
  const cardContent = (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay,
            ease: [0.6, -0.05, 0.01, 0.99],
          },
        },
      }}
      whileHover="hover"
      className={className}
    >
      <motion.div variants={hoverLift}>
        <Paper
          variant={variant}
          onClick={onClick}
          sx={{
            cursor: onClick ? 'pointer' : 'default',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: onClick ? 'translateY(-4px)' : 'none',
            },
            ...sx,
          }}
        >
          {children}
        </Paper>
      </motion.div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
        {cardContent}
      </a>
    );
  }

  return cardContent;
}