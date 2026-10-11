import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      setScrolled(currentScroll > 40);
      if (totalHeight > 0) {
        setScrollPercentage((currentScroll / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrolled, scrollPercentage };
}
