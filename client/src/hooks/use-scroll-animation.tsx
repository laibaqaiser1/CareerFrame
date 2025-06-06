import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}

export function useScrollOpacity() {
  const [opacity, setOpacity] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the element is visible
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const elementHeight = rect.height;
      
      // Determine visible portion
      let visibleHeight = 0;
      
      if (elementTop <= 0 && elementBottom >= windowHeight) {
        // Element is larger than viewport and spans entire screen
        visibleHeight = windowHeight;
      } else if (elementTop <= 0 && elementBottom > 0) {
        // Element starts above viewport but is partially visible
        visibleHeight = elementBottom;
      } else if (elementTop < windowHeight && elementBottom >= windowHeight) {
        // Element starts in viewport but extends below
        visibleHeight = windowHeight - elementTop;
      } else if (elementTop >= 0 && elementBottom <= windowHeight) {
        // Element is completely within viewport
        visibleHeight = elementHeight;
      }
      
      // Calculate opacity based on visibility percentage
      const visibilityRatio = Math.min(visibleHeight / Math.min(elementHeight, windowHeight), 1);
      const newOpacity = Math.max(0, Math.min(1, visibilityRatio));
      
      setOpacity(newOpacity);
    };

    // Initial calculation
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return { ref, opacity };
}

export function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
}
