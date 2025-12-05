import { useEffect, useState } from 'react';

const ANDROID_REGEX = /Android/i;

export function useIsMobileApp() {  

  const [isMobileApp, setIsMobileApp] = useState(false);

  useEffect(() => {
    const check = () => {
      // Check if it's an Android device
      const isAndroid =
        typeof navigator !== 'undefined' &&
        ANDROID_REGEX.test(navigator.userAgent || '');
      
      // Also check for mobile viewport (for testing in Chrome DevTools)
      // This allows testing mobile UI on localhost when using device emulation
      const isMobileViewport =
        typeof window !== 'undefined' && window.innerWidth <= 700;
      
      // Show mobile UI if Android device OR if testing with mobile viewport
      setIsMobileApp(isAndroid || isMobileViewport);
    };

    check();
    // Listen to resize for testing purposes (Chrome DevTools mobile emulation)
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return isMobileApp;
}


