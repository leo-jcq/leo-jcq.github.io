import { type AnchorHTMLAttributes } from 'react';

/**
 * Component that renders a link which opens in a new tab when clicked.
 *
 * @export
 */
function ExternalLink({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a {...props} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
}

export default ExternalLink;
