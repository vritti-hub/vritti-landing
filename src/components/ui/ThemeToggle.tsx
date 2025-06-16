"use client";

import { motion } from "framer-motion";
import { useTheme } from "quantum-ui";
import { Button } from "quantum-ui/Button";

export default function ThemeToggle() {
  const { colorScheme, toggleColorScheme, isHydrated } = useTheme();

  // Don't render until hydrated to avoid SSR mismatch
  if (!isHydrated) {
    return (
      <div
        style={{
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "var(--quantum-color-surface-secondary)",
            animation: "pulse 2s infinite",
          }}
        />
      </div>
    );
  }

  const isDark = colorScheme === "dark";

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ position: "relative" }}
    >
      <Button
        intent="ghost"
        onClick={toggleColorScheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        sx={{
          minWidth: "44px",
          height: "44px",
          borderRadius: "50%",
          padding: "10px",
          backgroundColor: "var(--quantum-color-surface-secondary)",
          border: "1px solid var(--quantum-color-border-subtle)",
          color: "var(--quantum-color-text-onPrimary)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            backgroundColor: "var(--quantum-color-surface-elevated)",
            border: "1px solid var(--quantum-color-border-default)",
          },
          transition: "all 0.3s ease",
        }}
      >
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 180 : 0,
            scale: isDark ? 0.8 : 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          style={{
            fontSize: "1.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isDark ? "☀️" : "🌙"}
        </motion.div>
      </Button>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        style={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          marginTop: "8px",
          padding: "6px 12px",
          backgroundColor: "var(--quantum-color-surface-elevated)",
          color: "var(--quantum-color-text-onPrimary)",
          borderRadius: "6px",
          fontSize: "0.75rem",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          zIndex: 1000,
        }}
      >
        Switch to {isDark ? "light" : "dark"} mode
        <div
          style={{
            position: "absolute",
            top: "-4px",
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "4px solid transparent",
            borderRight: "4px solid transparent",
            borderBottom: "4px solid rgba(0, 0, 0, 0.8)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
