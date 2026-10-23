import { MAIN_COLORS } from '@/constants/style';
import type { CSSProperties, PropsWithChildren, Ref } from 'react';
import './Section.scss';

interface SectionProps extends PropsWithChildren {
    ref?: Ref<HTMLElement>;
    id: string;
    index: number;
    title: string;
}

function Section({ ref, id, index, title, children }: SectionProps) {
    const color = MAIN_COLORS[(index - 1) % MAIN_COLORS.length];

    return (
        <section
            ref={ref}
            className="section"
            id={id}
            style={{ '--section-color': color } as CSSProperties}
        >
            <div className="section__heading">
                <span className="section__heading__index">0{index}</span>
                <h2 className="section__heading__title">{title}</h2>
            </div>

            {children}
        </section>
    );
}

export default Section;
