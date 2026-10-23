import { useEffect, useRef, useState, type RefObject } from 'react';

/**
 * Custom hook that uses the Intersection Observer API to track the visibility of a DOM element.
 *
 * @export
 * @template T - The type of the DOM element being observed, extending {@link HTMLElement}.
 * @param {IntersectionObserverInit} [options] - Optional configuration for the Intersection Observer.
 * @param {boolean} [triggerOnce=true] - If `true`, the observer will unobserve the element after it becomes visible for the first time.
 * @return {[RefObject<T | null>, boolean]} A tuple containing a ref to be attached to the target element and a boolean indicating its visibility.
 */
function useIntersectionObserver<T extends HTMLElement>(
    options?: IntersectionObserverInit,
    triggerOnce: boolean = true
): [RefObject<T | null>, boolean] {
    const containerRef = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let isObserving = true;
        const currentElement = containerRef.current;

        const observer = new IntersectionObserver((entries) => {
            // Determine if the observed element is intersecting with the viewport
            const isIntersecting = entries[0].isIntersecting;
            setIsVisible(isIntersecting);

            // If triggerOnce is true and the element is intersecting, unobserve it
            if (triggerOnce && isIntersecting && currentElement) {
                observer.unobserve(currentElement);
                isObserving = false;
            }
        }, options);

        // Observe the current element referenced by containerRef
        if (currentElement) observer.observe(currentElement);

        // Cleanup function to unobserve the element when the component unmounts or options changes
        return () => {
            if (currentElement && isObserving) observer.unobserve(currentElement);
        };
    }, [options, triggerOnce]);

    return [containerRef, isVisible];
}

export default useIntersectionObserver;
