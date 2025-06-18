/**
 * Lightweight CSS-based animation system to replace Framer Motion
 * Uses CSS animations + Intersection Observer for performance
 */

// Animation class names
export const animations = {
  fadeInUp: 'animate-fade-in-up',
  fadeInDown: 'animate-fade-in-down', 
  fadeIn: 'animate-fade-in',
  scaleIn: 'animate-scale-in',
  slideInLeft: 'animate-slide-in-left',
  slideInRight: 'animate-slide-in-right',
  hoverScale: 'hover-scale',
  hoverLift: 'hover-lift',
  pulse: 'animate-pulse-custom',
  float: 'animate-float',
  gradientShift: 'animate-gradient-shift',
  glassHover: 'hover-glass',
  backgroundFloat: 'animate-background-float',
} as const;

// Animation configuration
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

const defaultConfig: AnimationConfig = {
  duration: 600,
  delay: 0,
  easing: 'cubic-bezier(0.6, -0.05, 0.01, 0.99)',
  threshold: 0.1,
  rootMargin: '-100px',
  once: true,
};

// CSS styles for animations
export const getAnimationStyles = (): string => `
  /* Base animation classes */
  .animate-on-scroll {
    opacity: 0;
    transition: all var(--animation-duration, 0.6s) var(--animation-easing, cubic-bezier(0.6, -0.05, 0.01, 0.99));
    transition-delay: var(--animation-delay, 0s);
  }

  .animate-on-scroll.animate-visible {
    opacity: 1;
  }

  /* Fade animations */
  .animate-fade-in-up {
    transform: translateY(20px);
  }
  .animate-fade-in-up.animate-visible {
    transform: translateY(0);
  }

  .animate-fade-in-down {
    transform: translateY(-20px);
  }
  .animate-fade-in-down.animate-visible {
    transform: translateY(0);
  }

  .animate-fade-in.animate-visible {
    opacity: 1;
  }

  /* Scale animations */
  .animate-scale-in {
    transform: scale(0.8);
  }
  .animate-scale-in.animate-visible {
    transform: scale(1);
  }

  /* Slide animations */
  .animate-slide-in-left {
    transform: translateX(-50px);
  }
  .animate-slide-in-left.animate-visible {
    transform: translateX(0);
  }

  .animate-slide-in-right {
    transform: translateX(50px);
  }
  .animate-slide-in-right.animate-visible {
    transform: translateX(0);
  }

  /* Hover animations */
  .hover-scale {
    transition: transform 0.2s ease-in-out;
  }
  .hover-scale:hover {
    transform: scale(1.05);
  }

  .hover-lift {
    transition: all 0.3s ease-out;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
  .hover-lift:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .hover-glass {
    transition: backdrop-filter 0.3s ease;
    backdrop-filter: blur(10px);
  }
  .hover-glass:hover {
    backdrop-filter: blur(20px);
  }

  /* Continuous animations */
  @keyframes pulse-custom {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  .animate-pulse-custom {
    animation: pulse-custom 2s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(-10px); }
    50% { transform: translateY(10px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  @keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  .animate-gradient-shift {
    background-size: 400% 400%;
    animation: gradient-shift 8s linear infinite;
  }

  @keyframes background-float {
    0%, 100% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
  }
  .animate-background-float {
    animation: background-float 20s linear infinite;
  }

  /* Stagger animations */
  .stagger-container > * {
    animation-delay: calc(var(--stagger-delay, 0.1s) * var(--stagger-index, 0));
  }

  /* Reduced motion preferences */
  @media (prefers-reduced-motion: reduce) {
    .animate-on-scroll,
    .hover-scale,
    .hover-lift,
    .hover-glass {
      transition: none !important;
      animation: none !important;
    }
    
    .animate-on-scroll {
      opacity: 1 !important;
      transform: none !important;
    }
  }
`;

// Intersection Observer for scroll animations
class ScrollAnimationManager {
  private observer: IntersectionObserver | null = null;
  private elements = new Map<Element, AnimationConfig>();

  init() {
    if (typeof window === 'undefined') return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const config = this.elements.get(entry.target);
          if (!config) return;

          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            
            if (config.once) {
              this.observer?.unobserve(entry.target);
              this.elements.delete(entry.target);
            }
          } else if (!config.once) {
            entry.target.classList.remove('animate-visible');
          }
        });
      },
      {
        threshold: defaultConfig.threshold,
        rootMargin: defaultConfig.rootMargin,
      }
    );
  }

  observe(element: Element, config: AnimationConfig = {}) {
    if (!this.observer) this.init();
    
    const mergedConfig = { ...defaultConfig, ...config };
    this.elements.set(element, mergedConfig);
    
    // Set CSS custom properties
    const el = element as HTMLElement;
    el.style.setProperty('--animation-duration', `${mergedConfig.duration}ms`);
    el.style.setProperty('--animation-delay', `${mergedConfig.delay}ms`);
    el.style.setProperty('--animation-easing', mergedConfig.easing || defaultConfig.easing!);
    
    this.observer?.observe(element);
  }

  unobserve(element: Element) {
    this.observer?.unobserve(element);
    this.elements.delete(element);
  }

  disconnect() {
    this.observer?.disconnect();
    this.elements.clear();
  }
}

// Global animation manager instance
export const scrollAnimationManager = new ScrollAnimationManager();

// Utility functions
export const addScrollAnimation = (
  element: Element, 
  animation: keyof typeof animations,
  config?: AnimationConfig
) => {
  element.classList.add('animate-on-scroll', animations[animation]);
  scrollAnimationManager.observe(element, config);
};

export const addStaggerAnimation = (
  container: Element,
  itemSelector: string,
  config?: AnimationConfig & { staggerDelay?: number }
) => {
  const items = container.querySelectorAll(itemSelector);
  const staggerDelay = config?.staggerDelay || 0.1;
  
  container.classList.add('stagger-container');
  
  items.forEach((item, index) => {
    const el = item as HTMLElement;
    el.style.setProperty('--stagger-index', index.toString());
    el.style.setProperty('--stagger-delay', `${staggerDelay}s`);
    
    addScrollAnimation(item, 'fadeInUp', {
      ...config,
      delay: (config?.delay || 0) + (index * staggerDelay * 1000),
    });
  });
};

// Cleanup function
export const cleanupAnimations = () => {
  scrollAnimationManager.disconnect();
};

// Initialize animations when DOM is ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      scrollAnimationManager.init();
    });
  } else {
    scrollAnimationManager.init();
  }
}