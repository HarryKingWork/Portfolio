'use client';
import { useState, useEffect } from 'react';

const useViewportWidth = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    // Set initial width
    setWidth(window.innerWidth);

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

export default useViewportWidth;
