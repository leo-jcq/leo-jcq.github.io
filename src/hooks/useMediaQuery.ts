import { useLayoutEffect, useState } from 'react';

/**
 * Custom hook that listens for changes to a CSS media query and returns a boolean indicating whether the query currently matches.
 *
 * @export
 * @param {string} query - The CSS media query to listen for.
 * @return {boolean} 'true' if the media query matches, `false` otherwise.
 */
function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useLayoutEffect(() => {
        const matchMedia = window.matchMedia(query);

        const handleChange = () => {
            setMatches(window.matchMedia(query).matches);
        };

        handleChange();

        matchMedia.addEventListener('change', handleChange);

        return () => {
            matchMedia.removeEventListener('change', handleChange);
        };
    }, [query]);

    return matches;
}

export default useMediaQuery;
