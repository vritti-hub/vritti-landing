'use client';

import React, { forwardRef } from 'react';
import { useScrollAnimation, useStaggerAnimation, useContinuousAnimation } from '@/lib/hooks/useScrollAnimation';
import { animations, type AnimationConfig } from '@/lib/utils/css-animations';

// Base animated component
interface AnimatedProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation?: keyof typeof animations;
  config?: AnimationConfig;
  as?: React.ElementType;
}

export const Animated = forwardRef<HTMLDivElement, AnimatedProps>(({
  children,
  animation = 'fadeInUp',
  config,
  as: Component = 'div',
  className = '',
  ...props
}, externalRef) => {
  const ref = useScrollAnimation(animation, config);
  
  // Merge refs if external ref is provided
  const mergedRef = externalRef || ref;

  return (
    <Component
      ref={mergedRef}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
});

Animated.displayName = 'Animated';

// Stagger container component
interface StaggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  itemSelector?: string;
  staggerDelay?: number;
  config?: AnimationConfig;
  as?: React.ElementType;
}

export const Stagger = forwardRef<HTMLDivElement, StaggerProps>(({
  children,
  itemSelector = '> *',
  staggerDelay = 0.1,
  config,
  as: Component = 'div',
  className = '',
  ...props
}, externalRef) => {
  const ref = useStaggerAnimation(itemSelector, { ...config, staggerDelay });
  
  const mergedRef = externalRef || ref;

  return (
    <Component
      ref={mergedRef}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
});

Stagger.displayName = 'Stagger';

// Continuous animation component
interface ContinuousProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation: 'pulse' | 'float' | 'gradientShift' | 'backgroundFloat';
  as?: React.ElementType;
}

export const Continuous = forwardRef<HTMLDivElement, ContinuousProps>(({
  children,
  animation,
  as: Component = 'div',
  className = '',
  ...props
}, ref) => {
  const animationClass = useContinuousAnimation(animation);

  return (
    <Component
      ref={ref}
      className={`${animationClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
});

Continuous.displayName = 'Continuous';

// Hover animation component
interface HoverProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation: 'hoverScale' | 'hoverLift' | 'glassHover';
  as?: React.ElementType;
}

export const Hover = forwardRef<HTMLDivElement, HoverProps>(({
  children,
  animation,
  as: Component = 'div',
  className = '',
  ...props
}, ref) => {
  const animationClass = animations[animation];

  return (
    <Component
      ref={ref}
      className={`${animationClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
});

Hover.displayName = 'Hover';

// Convenience components for common patterns
export const FadeInUp = (props: Omit<AnimatedProps, 'animation'>) => (
  <Animated animation="fadeInUp" {...props} />
);

export const FadeInDown = (props: Omit<AnimatedProps, 'animation'>) => (
  <Animated animation="fadeInDown" {...props} />
);

export const ScaleIn = (props: Omit<AnimatedProps, 'animation'>) => (
  <Animated animation="scaleIn" {...props} />
);

export const SlideInLeft = (props: Omit<AnimatedProps, 'animation'>) => (
  <Animated animation="slideInLeft" {...props} />
);

export const SlideInRight = (props: Omit<AnimatedProps, 'animation'>) => (
  <Animated animation="slideInRight" {...props} />
);

// Export all components
export {
  Animated as default,
  type AnimatedProps,
  type StaggerProps,
  type ContinuousProps,
  type HoverProps,
};