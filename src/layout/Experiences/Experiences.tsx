import Experience from '@/components/Experience/Experience';
import Section from '@/components/Section/Section';
import { FC } from 'react';
import './Experiences.scss';
import experiences from './exp';

/**
 * The experiences section
 *
 * @type {FC}
 */
const Experiences: FC = () => {
    return (
        <Section
            name="experiences"
            title="Expériences"
            description="Voici mes expériences professionnelles qui m'ont formées"
        >
            {experiences.map((experience) => (
                <Experience experience={experience} />
            ))}
        </Section>
    );
};

export default Experiences;
