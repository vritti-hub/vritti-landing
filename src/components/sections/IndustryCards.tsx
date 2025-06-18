"use client";

import GradientText from "@/components/ui/GradientText";
import { INDUSTRIES } from "@/lib/constants/content";
import { Button } from "@vritti/quantum-ui/Button";
import { Paper } from "@vritti/quantum-ui/Paper";
import { Typography } from "@vritti/quantum-ui/Typography";
import { useState } from "react";

export default function IndustryCards() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const nextIndustry = () => {
    setActiveIndustry((prev) => (prev + 1) % INDUSTRIES.length);
  };

  const prevIndustry = () => {
    setActiveIndustry(
      (prev) => (prev - 1 + INDUSTRIES.length) % INDUSTRIES.length
    );
  };

  return (
    <section style={{ position: "relative" }}>
      <Paper
        variant="section"
        fullWidth
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Section Header */}
          <div
            style={{ textAlign: "center", marginBottom: "4rem" }}
          >
            <GradientText
              variant="h2"
              gradient="primary"
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3rem",
                },
                mb: 3,
              }}
            >
              Built for Businesses Like Yours
            </GradientText>
            <Typography
              variant="h3"
              intent="secondary"
              sx={{
                fontSize: {
                  xs: "1.125rem",
                  md: "1.25rem",
                },
                fontWeight: 400,
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              See how Vritti AI transforms operations across different
              industries.
            </Typography>
          </div>

          {/* Industry Showcase */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}
          >
            {/* Featured Industry Card */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "2rem",
              }}
            >
              <div
                key={activeIndustry}
                style={{ maxWidth: "500px", width: "100%" }}
              >
                  <Paper
                    variant="accent"
                    highEmphasis
                  >
                    <div
                      style={{ fontSize: "4rem", marginBottom: "1.5rem" }}
                    >
                      {INDUSTRIES[activeIndustry].image}
                    </div>

                    <Typography
                      variant="h3"
                      intent="primary"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      {INDUSTRIES[activeIndustry].name}
                    </Typography>

                    <Typography
                      variant="h4"
                      intent="primary"
                      sx={{
                        fontWeight: 500,
                        mb: 2,
                        fontStyle: "italic",
                      }}
                    >
                      "{INDUSTRIES[activeIndustry].description}"
                    </Typography>

                    <Typography
                      variant="body1"
                      intent="secondary"
                      sx={{
                        lineHeight: 1.6,
                      }}
                    >
                      {INDUSTRIES[activeIndustry].details}
                    </Typography>
                  </Paper>
              </div>
            </div>

            {/* Navigation Controls */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "2rem",
                marginBottom: "2rem",
                flexWrap: "wrap",
              }}
            >
              <Button
                intent="secondary"
                onClick={prevIndustry}
                sx={{
                  backgroundColor: "var(--quantum-color-surface-glass)",
                  border: "1px solid var(--quantum-color-border-glass)",
                  "&:hover": {
                    backgroundColor: "var(--quantum-color-surface-glass-hover)",
                  },
                }}
              >
                ← Previous
              </Button>

              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                {INDUSTRIES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndustry(index)}
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      border: "none",
                      background:
                        index === activeIndustry
                          ? "var(--quantum-color-action-primary)"
                          : "var(--quantum-color-surface-ghost)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>

              <Button
                intent="secondary"
                onClick={nextIndustry}
                sx={{
                  backgroundColor: "var(--quantum-color-surface-glass)",
                  border: "1px solid var(--quantum-color-border-glass)",
                  "&:hover": {
                    backgroundColor: "var(--quantum-color-surface-glass-hover)",
                  },
                }}
              >
                Next →
              </Button>
            </div>

            {/* Industry Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.5rem",
                justifyItems: "center",
                alignItems: "start",
              }}
            >
              {INDUSTRIES.map((industry, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndustry(index)}
                >
                  <Paper
                    variant={index === activeIndustry ? "accent" : "surface"}
                    sx={{
                      p: 2,
                      textAlign: "center",
                      cursor: "pointer",
                      minHeight: "120px",
                      height: "120px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                      {industry.image}
                    </div>
                    <Typography
                      variant="body1"
                      intent="primary"
                      sx={{
                        fontWeight: 500,
                        fontSize: "0.9rem",
                      }}
                    >
                      {industry.name}
                    </Typography>
                  </Paper>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Paper>
    </section>
  );
}
