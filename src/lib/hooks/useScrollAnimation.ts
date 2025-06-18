import { useEffect, useRef } from 'react';
import { 
  addScrollAnimation, 
  addStaggerAnimation, 
  animations,
  type AnimationConfig 
} from '@/lib/utils/css-animations';

/**
 * Hook for adding scroll-triggered animations to elements
 */
export const useScrollAnimation = (
  animation: keyof typeof animations,
  config?: AnimationConfig
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    addScrollAnimation(element, animation, config);

    return () => {
      // Cleanup is handled by the ScrollAnimationManager
    };
  }, [animation, config]);

  return ref;
};

/**
 * Hook for adding stagger animations to children
 */
export const useStaggerAnimation = (
  itemSelector: string = '> *',
  config?: AnimationConfig & { staggerDelay?: number }
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Small delay to ensure children are rendered
    const timeoutId = setTimeout(() => {
      addStaggerAnimation(element, itemSelector, config);
    }, 50);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [itemSelector, config]);

  return ref;
};

/**
 * Hook that returns animation class names for direct use
 */
export const useAnimationClasses = (
  animationType: keyof typeof animations,
  options?: {
    hover?: boolean;
    active?: boolean;
  }
) => {
  const baseClasses = ['animate-on-scroll', animations[animationType]];
  
  if (options?.hover && animationType.includes('hover')) {
    baseClasses.push(animations[animationType]);
  }

  return baseClasses.join(' ');
};

/**
 * Hook for continuous animations (pulse, float, etc.)
 */
export const useContinuousAnimation = (
  animation: 'pulse' | 'float' | 'gradientShift' | 'backgroundFloat'
) => {
  return animations[animation];
};