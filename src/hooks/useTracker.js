import { useEffect } from 'react';

const useTracker = (pageName) => {
    useEffect(() => {
        // 1. Track Clicks (Heatmap Data)
        const handleContextClick = (e) => {
            const clickData = {
                x: e.pageX,
                y: e.pageY,
                screenW: window.innerWidth,
                element: e.target.tagName,
                timestamp: new Date().toISOString(),
            };
            console.log("Heatmap Point:", clickData);
            // axios.post('/api/track/click', { ...clickData, page: pageName });
        };

        // 2. Track Scroll Depth
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = Math.round((winScroll / height) * 100);

            if (scrolled % 25 === 0) { // Log at 25%, 50%, 75%, 100%
                console.log(`User reached ${scrolled}% of ${pageName}`);
                // axios.post('/api/track/scroll', { depth: scrolled, page: pageName });
            }
        };

        window.addEventListener('click', handleContextClick);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('click', handleContextClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pageName]);
};

export default useTracker;