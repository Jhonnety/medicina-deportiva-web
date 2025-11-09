'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash.replace('#', '');
    
    // Check if there's a stored section in sessionStorage
    const storedSection = sessionStorage.getItem('scrollToSection');
    
    const targetSection = hash || storedSection;
    
    if (targetSection) {
      // Attempt to scroll to the section multiple times
      const attemptScroll = (attempts = 0, maxAttempts = 20) => {
        const element = document.getElementById(targetSection);
        
        if (element) {
          // Small delay to ensure smooth scroll works properly
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 50);
          sessionStorage.removeItem('scrollToSection');
        } else if (attempts < maxAttempts) {
          // Try again with increasing delay
          setTimeout(() => {
            attemptScroll(attempts + 1, maxAttempts);
          }, 100 + (attempts * 50));
        }
      };
      
      // Start attempting to scroll after a short initial delay
      setTimeout(() => {
        attemptScroll();
      }, 100);
    }
  }, [pathname]);

  return null;
}

