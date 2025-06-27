// utils/animations.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Initialize GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Helper for text split animation
export const splitTextAnimation = (element: string, delay: number = 0) => {
  if (typeof document === 'undefined') return null;
  
  const text = document.querySelector(element);
  if (!text) return null;
  
  const content = text.textContent || '';
  const letters = content.split('');
  
  text.textContent = '';
  
  letters.forEach((letter, i) => {
    const span = document.createElement('span');
    span.textContent = letter === ' ' ? '\u00A0' : letter;
    span.style.opacity = '0';
    span.style.display = 'inline-block';
    text.appendChild(span);
    
    gsap.to(span, {
      opacity: 1,
      duration: 0.3,
      delay: delay + (i * 0.05),
      ease: 'power2.inOut',
    });
  });
  
  return text;
};

// Create a scroll-triggered animation
export const createScrollAnimation = (
  trigger: string, 
  animations: gsap.TweenVars,
  options: ScrollTrigger.Vars = {}
) => {
  if (typeof window === 'undefined') return null;
  
  return gsap.to(trigger, {
    ...animations,
    scrollTrigger: {
      trigger,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      ...options,
    },
  });
};

// Counter animation
export const animateCounter = (
  element: string, 
  start: number = 0, 
  end: number, 
  duration: number = 2, 
  prefix: string = '', 
  suffix: string = ''
) => {
  if (typeof document === 'undefined') return null;
  
  const target = document.querySelector(element);
  if (!target) return null;
  
  // Store target in a variable that's guaranteed not to be null
  const safeTarget = target;
  
  let startTime: number | null = null;
  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
    const value = Math.floor(progress * (end - start) + start);
    safeTarget.textContent = `${prefix}${value}${suffix}`;
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      safeTarget.textContent = `${prefix}${end}${suffix}`;
    }
  };
  
  window.requestAnimationFrame(step);
  return safeTarget;
};

// Parallax effect on mouse move
export const createParallaxEffect = (element: string, strength: number = 0.05) => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return null;
  
  const target = document.querySelector(element);
  if (!target) return null;
  
  // Store target in a variable that's guaranteed not to be null
  const safeTarget = target;
  
  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const xPos = (clientX / innerWidth - 0.5) * strength;
    const yPos = (clientY / innerHeight - 0.5) * strength;
    
    gsap.to(safeTarget, {
      x: xPos * 100,
      y: yPos * 100,
      duration: 0.8,
      ease: 'power2.out',
    });
  };
  
  document.addEventListener('mousemove', handleMouseMove);
  
  // Return a cleanup function to remove event listener
  return {
    element: safeTarget,
    cleanup: () => document.removeEventListener('mousemove', handleMouseMove)
  };
};

// Typwriter effect
export const typewriterEffect = (
  element: string, 
  texts: string[], 
  typeSpeed: number = 50, 
  backSpeed: number = 25,
  backDelay: number = 1500,
  loop: boolean = true
) => {
  if (typeof document === 'undefined') return null;
  
  const target = document.querySelector(element);
  if (!target) return null;
  
  // Store target in a variable that's guaranteed not to be null
  const safeTarget = target;
  
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timeoutId: NodeJS.Timeout;
  
  function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      safeTarget.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      safeTarget.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      timeoutId = setTimeout(type, backDelay);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      timeoutId = setTimeout(type, 500);
    } else {
      timeoutId = setTimeout(type, isDeleting ? backSpeed : typeSpeed);
    }
  }
  
  type();
  
  // Return element and cleanup function
  return {
    element: safeTarget,
    cleanup: () => clearTimeout(timeoutId)
  };
};

// Stagger animation for multiple elements
export const staggerElements = (
  elements: string,
  animations: gsap.TweenVars,
  staggerTime: number = 0.1,
  scrollTrigger?: boolean
) => {
  if (typeof document === 'undefined') return null;
  
  const targets = document.querySelectorAll(elements);
  if (!targets.length) return null;
  
  if (scrollTrigger && targets[0].parentElement) {
    return gsap.from(targets, {
      ...animations,
      stagger: staggerTime,
      scrollTrigger: {
        trigger: targets[0].parentElement,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });
  }
  
  return gsap.from(targets, {
    ...animations,
    stagger: staggerTime,
  });
};