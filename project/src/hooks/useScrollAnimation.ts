import { useEffect, useRef, useState, useCallback } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Disconnect observer after first trigger to prevent further callbacks
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      }
    },
    []
  );

  useEffect(() => {
    if (isVisible) return; // Don't create observer if already visible

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin: '100px 0px',
    });

    const currentRef = ref.current;
    if (currentRef && observerRef.current) {
      observerRef.current.observe(currentRef);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersection, threshold, isVisible]);

  return { ref, isVisible };
};