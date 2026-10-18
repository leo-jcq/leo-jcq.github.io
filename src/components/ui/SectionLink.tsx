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
    spy = true,
    smooth = true,
    duration = 500,
    className,
    title,
    children,
    ...props
}: SectionLink) {
    return (
        <Link
            {...props}
            spy={spy}
            smooth={smooth}
            duration={duration}
            className={className}
            title={title}
        >
            {children}
        </Link>
    );
}

export default SectionLink;
