import { FC, PropsWithChildren } from 'react';
import './Section.scss';

interface SectionProps extends PropsWithChildren {
    name: string;
    title: string;
    description: string;
}

const Section: FC<SectionProps> = ({ name, title, description, children }) => {
    return (
        <section id={name} className={`section section-${name}`}>
            <div className={`section__heading section-${name}__heading`}>
                <h1 className={`section__heading__title section-${name}__heading__title`}>
                    {title}
                </h1>
                <span
                    className={`section__heading__separator section-${name}__heading__separator`}
                />
                <p
                    className={`section__heading__description section-${name}__heading__description`}
                >
                    {description}
                </p>
            </div>
            <div className={`section__content section-${name}__content`}>{children}</div>
        </section>
    );
};

export default Section;
