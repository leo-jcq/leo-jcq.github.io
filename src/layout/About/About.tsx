import Section from '@/components/Section/Section';
import SkillCard from '@/components/SkillCard/SkillCard';
import { SkillName } from '@/types/app';
import { FC } from 'react';
import './About.scss';

/**
 * The about section
 *
 * @type {FC}
 */
const About: FC = () => {
    return (
        <Section
            name="about"
            title="A propos"
            description="Vous trouverez ici plus d'informations sur moi, mon parcours et mes compétences"
        >
            <AboutPresentation />

            <AboutSkills />
        </Section>
    );
};

export default About;

/**
 * The presentation subsection of the about section
 *
 * @type {FC}
 */
const AboutPresentation: FC = () => {
    return (
        <div className="section-about__subsection section-about__subsection--presentation">
            <h2 className="section-about__subsection__title">Qui suis-je ?</h2>

            <p className="section-about__subsection__text">
                Actuellement en troisième année de <b>BUT Informatique</b> en alternance à l'
                <b>IUT 2 de Grenoble</b>. Ma passion pour le <b>développement web</b> a été révélée
                dès ma première année de formation, et depuis, elle n'a cessé de croître.
            </p>

            <p className="section-about__subsection__text">
                Au fil de mon parcours, j'ai acquis une solide compréhension des langages et des
                technologies web moderne, tout en développant des compétences pratiques grâce à mon
                expérience en <b>alternance</b>, en <b>stage</b> ou encore au cours des différents{' '}
                <b>projets</b> effectués lors de ma formation. Que ce soit la conception de sites
                web dynamiques, l'optimisation de la performance ou la résolution de problèmes
                complexes, je suis constamment motivé à apprendre et à relever de nouveaux défis.
            </p>

            <p className="section-about__subsection__text">
                Mais ma soif d'apprentissage ne s'arrête pas au cadre <b>universitaire</b> ou{' '}
                <b>professionnel</b>. J'ai également développé de nombreux projets en{' '}
                <b>autodidacte</b> afin de renforcer mes compétences en développement web.
            </p>

            <a href="#contact" className="section-about__subsection__contact">
                Contact
            </a>
        </div>
    );
};

/**
 * The skills subsection of the about section
 *
 * @type {FC}
 */
const AboutSkills: FC = () => {
    const skillNames: SkillName[] = [
        'html',
        'css',
        'scss',
        'js',
        'ts',
        'react',
        'node',
        'csharp',
        'dotnet',
        'git',
        'github',
        'gitlab',
        'vitest',
        'figma',
        'postman'
    ];

    return (
        <div className="section-about__subsection section-about__subsection--skills">
            <h2 className="section-about__subsection__title">Compétences</h2>

            <div className="section-about__subsection__skills">
                {skillNames.map((skillName) => (
                    <SkillCard key={skillName} name={skillName} />
                ))}
            </div>
        </div>
    );
};
