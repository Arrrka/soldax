import { useState, useEffect } from 'react';

//отслеживание размеров под устройства

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    const handleMediaChange = () => setMatches(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, [query]);

  return matches;
}

export function useDevice() {
  return {
    isMobile: useMediaQuery('(max-width: 768px)'),
    isTablet: useMediaQuery('(max-width: 1024px)'),
    isDesktop: useMediaQuery('(min-width: 1025px)'),
  };
}
