import type { PropsWithChildren } from 'react';
import './SideRail.scss';

interface SideRailProps extends PropsWithChildren {
    className: string;
    side: 'right' | 'left';
}

function SideRail({ className, side, children }: SideRailProps) {
    return <div className={`side-rail side-rail--${side} ${className}`}>{children}</div>;
}

export default SideRail;
