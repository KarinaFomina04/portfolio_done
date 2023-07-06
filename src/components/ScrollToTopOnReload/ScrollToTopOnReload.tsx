import { useEffect } from 'react';

export const ScrollToTopOnReload =() => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}


