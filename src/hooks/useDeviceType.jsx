import { useState, useEffect } from 'react';

// Définition des breakpoints en constantes pour plus de maintenabilité
const BREAKPOINTS = {
    mobile: '(max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 1023px)',
    desktop: '(min-width: 1024px)'
};

const useDeviceType = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDeviceType = () => {
            setIsMobile(window.matchMedia(BREAKPOINTS.mobile).matches);
            setIsTablet(window.matchMedia(BREAKPOINTS.tablet).matches);
            setIsDesktop(window.matchMedia(BREAKPOINTS.desktop).matches);
        };

        // Vérification initiale
        checkDeviceType();

        // Utilisation d'un seul listener pour surveiller les changements de taille
        window.addEventListener('resize', checkDeviceType);

        return () => window.removeEventListener('resize', checkDeviceType);
    }, []);

    return { isMobile, isTablet, isDesktop };
};

export default useDeviceType;
