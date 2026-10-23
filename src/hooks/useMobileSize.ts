import useMediaQuery from './useMediaQuery';

/**
 * Custom hook to determine if the screen size is mobile (max-width: 700px).
 *
 * @return {boolean} `true` if the screen size is mobile, `false` otherwise.
 */
function useMobileSize(): boolean {
    return useMediaQuery('(max-width: 700px)');
}

export default useMobileSize;
