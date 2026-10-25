import useMediaQuery from '@/hooks/useMediaQuery';
import type { PropsWithChildren } from 'react';
import { Link } from 'react-scroll';
import type { ReactScrollLinkProps } from 'react-scroll/modules/components/Link';

interface SectionLink extends ReactScrollLinkProps, PropsWithChildren {
    className?: string;
    title?: string;
}

/**
 * Component that renders a link which smoothly scrolls to a specified section of the page when clicked, using the react-scroll library.
 *
 * @export
 */
function SectionLink({
    to,
    spy = true,
    smooth = true,
    duration = 500,
    className,
    title,
    children,
    ...props
}: SectionLink) {
    const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

    const finalSmooth = smooth && !prefersReducedMotion;
    const finalDuration = prefersReducedMotion ? 0 : duration;

    return (
        <Link
            to={to}
            {...props}
            spy={spy}
            smooth={finalSmooth}
            duration={finalDuration}
            className={className}
            title={title}
            href={`#${to}`}
        >
            {children}
        </Link>
    );
}

export default SectionLink;
