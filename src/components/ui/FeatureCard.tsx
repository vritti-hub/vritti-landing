"use client";

import { Typography } from "@vritti/quantum-ui/Typography";
import { Paper } from "@vritti/quantum-ui/Paper";

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
    <Paper
      variant="feature"
      glass
      onClick={onClick}
      sx={{
        p: 3,
        height: "400px",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "flex-start",
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      {/* Icon */}
      <div
        style={{
          fontSize: "3rem",
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "transform 0.3s ease",
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
      </div>

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
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--quantum-color-text-onPrimary)",
            fontSize: "0.875rem",
            fontWeight: 500,
            opacity: 0,
            transition: "opacity 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0';
          }}
        >
          Learn more
          <span style={{ transition: "transform 0.2s ease" }}>
            →
          </span>
        </div>
      )}
    </Paper>
  );
}
