'use client';

import { Paper } from '@vritti/quantum-ui/Paper';
import { Typography } from '@vritti/quantum-ui/Typography';
import { Button } from '@vritti/quantum-ui/Button';
import { Animated, Stagger, Continuous, Hover, FadeInUp, ScaleIn } from './Animated';

/**
 * Test component to demonstrate the new CSS animation system
 * This replaces Framer Motion with lightweight CSS animations
 */
export default function AnimationTest() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      {/* Basic fade in animation */}
      <FadeInUp config={{ duration: 800, delay: 200 }}>
        <Paper variant="surface" sx={{ p: 3, mb: 3 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Lightweight CSS Animations
          </Typography>
          <Typography variant="body1">
            This component demonstrates our new CSS-based animation system that replaces Framer Motion.
          </Typography>
        </Paper>
      </FadeInUp>

      {/* Scale in animation */}
      <ScaleIn config={{ delay: 400 }}>
        <Paper variant="accent" sx={{ p: 3, mb: 3, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Scale In Animation
          </Typography>
          <Typography variant="body1">
            This card scales in with a custom delay.
          </Typography>
        </Paper>
      </ScaleIn>

      {/* Stagger animation for list items */}
      <Stagger staggerDelay={0.15} config={{ delay: 600 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Stagger Animation Example
        </Typography>
        {[1, 2, 3, 4].map((item) => (
          <Paper key={item} variant="surface" sx={{ p: 2, mb: 2 }}>
            <Typography variant="body1">
              Staggered item {item} - Each item animates with a delay
            </Typography>
          </Paper>
        ))}
      </Stagger>

      {/* Hover animations */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        <Hover animation="hoverScale">
          <Paper variant="feature" sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h4">Hover Scale</Typography>
            <Typography variant="body2">Hover me!</Typography>
          </Paper>
        </Hover>

        <Hover animation="hoverLift">
          <Paper variant="feature" sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h4">Hover Lift</Typography>
            <Typography variant="body2">Hover me!</Typography>
          </Paper>
        </Hover>
      </div>

      {/* Continuous animations */}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', justifyContent: 'center' }}>
        <Continuous animation="pulse">
          <Button intent="primary">Pulsing Button</Button>
        </Continuous>

        <Continuous animation="float">
          <div style={{ fontSize: '2rem' }}>🚀</div>
        </Continuous>
      </div>

      {/* Performance info */}
      <Animated animation="fadeInUp" config={{ delay: 1000 }}>
        <Paper variant="minimal" sx={{ p: 3, mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            ✨ All animations use CSS transforms and Intersection Observer for optimal performance
          </Typography>
        </Paper>
      </Animated>
    </div>
  );
}