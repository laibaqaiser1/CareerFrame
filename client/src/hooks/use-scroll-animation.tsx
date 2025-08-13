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
      
      // Calculate precise visibility percentage
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const elementHeight = rect.height;
      
      let visibleHeight = 0;
      
      // Calculate visible portion more precisely
      if (elementBottom <= 0 || elementTop >= windowHeight) {
        // Element is completely outside viewport
        visibleHeight = 0;
      } else if (elementTop <= 0 && elementBottom >= windowHeight) {
        // Element is larger than viewport and spans entire screen
        visibleHeight = windowHeight;
      } else if (elementTop <= 0) {
        // Element starts above viewport but is partially visible from top
        visibleHeight = elementBottom;
      } else if (elementBottom >= windowHeight) {
        // Element starts in viewport but extends below
        visibleHeight = windowHeight - elementTop;
      } else {
        // Element is completely within viewport
        visibleHeight = elementHeight;
      }
      
      // Calculate exact visibility percentage (0% to 100%)
      const totalPossibleVisible = Math.min(elementHeight, windowHeight);
      let visibilityPercentage = totalPossibleVisible > 0 ? (visibleHeight / totalPossibleVisible) : 0;
      
      // Ensure percentage is between 0 and 1
      visibilityPercentage = Math.max(0, Math.min(1, visibilityPercentage));
      
      // Convert to opacity: 1, visible = 0 opacity, 1% visible = 0.01 opacity, 100% visible = 1 opacity
      const newOpacity = visibilityPercentage;
      
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
