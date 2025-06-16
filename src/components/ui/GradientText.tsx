'use client';

import { Typography } from 'quantum-ui/Typography';
import { motion } from 'framer-motion';
import { ReactNode, CSSProperties } from 'react';

interface GradientTextProps {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'overline';
  gradient?: 'primary' | 'secondary' | 'hero' | 'warm' | 'cool';
  animate?: boolean;
  className?: string;
  sx?: Record<string, unknown>;
}

const gradients = {
  primary: 'linear-gradient(135deg, #0066ff 0%, #0052cc 50%, #003580 100%)',
  secondary: 'linear-gradient(135deg, #4A90E2 0%, #0066ff 50%, #003580 100%)',
  hero: 'linear-gradient(135deg, #0066ff 0%, #4A90E2 50%, #74b9ff 100%)',
  warm: 'linear-gradient(135deg, #ff7675 0%, #fd79a8 50%, #fdcb6e 100%)',
  cool: 'linear-gradient(135deg, #00b894 0%, #00cec9 50%, #0984e3 100%)',
};

export default function GradientText({
  children,
  variant = 'h1',
  gradient = 'primary',
  animate = false,
  className,
  sx = {},
}: GradientTextProps) {
  const textComponent = (
    <Typography
      variant={variant}
      className={className}
      sx={{
        background: gradients[gradient],
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        backgroundSize: animate ? '200% 200%' : '100% 100%',
        fontWeight: 700,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );

  if (animate) {
    return (
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          background: gradients[gradient],
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        <Typography
          variant={variant}
          className={className}
          sx={{
            background: 'inherit',
            WebkitBackgroundClip: 'inherit',
            WebkitTextFillColor: 'inherit',
            backgroundClip: 'inherit',
            fontWeight: 700,
            ...sx,
          }}
        >
          {children}
        </Typography>
      </motion.div>
    );
  }

  return textComponent;
}