import { MAIN_COLORS } from '@/constants/style';
import type { CSSProperties, PropsWithChildren } from 'react';
import './Section.scss';

interface SectionProps extends PropsWithChildren {
    id: string;
    index: number;
    title: string;
}

function Section({ id, index, title, children }: SectionProps) {
    const color = MAIN_COLORS[(index - 1) % MAIN_COLORS.length];

    return (
        <div className="section" id={id} style={{ '--section-color': color } as CSSProperties}>
            <div className="section__heading">
                <span className="section__heading__index">0{index}</span>
                <h2 className="section__heading__title">{title}</h2>
            </div>

            {children}
        </div>
    );
}

export default Section;
