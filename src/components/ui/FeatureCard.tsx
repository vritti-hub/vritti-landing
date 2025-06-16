"use client";

import { motion } from "framer-motion";
import { Typography } from "quantum-ui/Typography";
import AnimatedCard from "./AnimatedCard";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  details?: string;
  delay?: number;
  onClick?: () => void;
}

export default function FeatureCard({
  title,
  description,
  icon,
  details,
  delay = 0,
  onClick,
}: FeatureCardProps) {
  return (
    <AnimatedCard
      variant="glassCard"
      delay={delay}
      onClick={onClick}
      sx={{
        p: 3,
        height: "400px",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "flex-start",
      }}
    >
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          fontSize: "3rem",
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon.endsWith('.svg') ? (
          <img 
            src={icon} 
            alt={title}
            style={{
              width: '60px',
              height: '60px',
              filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(202deg) brightness(102%) contrast(90%)'
            }}
          />
        ) : (
          icon
        )}
      </motion.div>

      {/* Title */}
      <Typography
        variant="h3"
        intent="primary"
        sx={{
          fontWeight: 600,
          textAlign: "center",
          mb: 1,
        }}
      >
        {title}
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        intent="primary"
        sx={{
          textAlign: "center",
          fontWeight: 500,
          mb: details ? 1 : 0,
        }}
      >
        {description}
      </Typography>

      {/* Details */}
      {details && (
        <Typography
          variant="body2"
          intent="primary"
          sx={{
            textAlign: "center",
            fontSize: "0.9rem",
            lineHeight: 1.5,
            opacity: 0.8,
          }}
        >
          {details}
        </Typography>
      )}

      {/* Hover indicator */}
      {onClick && (
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--quantum-color-text-onPrimary)",
            fontSize: "0.875rem",
            fontWeight: 500,
          }}
        >
          Learn more
          <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
            →
          </motion.span>
        </motion.div>
      )}
    </AnimatedCard>
  );
}
