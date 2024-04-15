import {
    csharpIcon,
    dotNetIcon,
    figmaLogo,
    gitLabLogo,
    postmanLogo,
    typescriptIcon,
    vitestLogo
} from '@/assets/assets';
import Section from '@/components/Section/Section';
import SkillCard, { SkillCardProps } from '@/components/SkillCard/SkillCard';
import {
    faCss3,
    faGitAlt,
    faGithub,
    faHtml5,
    faJs,
    faNodeJs,
    faReact,
    faSass
} from '@fortawesome/free-brands-svg-icons';
import { FC } from 'react';
import './About.scss';

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

const AboutSkills: FC = () => {
    const skills: SkillCardProps[] = [
        {
            text: 'HTML',
            icon: faHtml5,
            color: '#f91111'
        },
        {
            text: 'CSS',
            icon: faCss3,
            color: '#2392f4'
        },
        {
            text: 'SCSS',
            icon: faSass,
            color: '#ff0074'
        },
        {
            text: 'JavaScript',
            icon: faJs,
            color: '#ffd62C'
        },
        {
            text: 'TypeScript',
            icon: typescriptIcon,
            color: '#0077d0'
        },
        {
            text: 'React',
            icon: faReact,
            color: '#00c0d5'
        },
        {
            text: 'Node.js',
            icon: faNodeJs,
            color: '#6cd853'
        },
        {
            text: 'CSharp',
            icon: csharpIcon,
            color: '#0077d0'
        },
        {
            text: '.NET',
            icon: dotNetIcon
        },
        {
            text: 'Git',
            icon: faGitAlt,
            color: '#fb0000'
        },
        {
            text: 'GitHub',
            icon: faGithub,
            color: '#4d6e7a'
        },
        {
            text: 'GitLab',
            icon: gitLabLogo
        },
        {
            text: 'Vitest',
            icon: vitestLogo
        },
        {
            text: 'Figma',
            icon: figmaLogo
        },
        {
            text: 'Postman',
            icon: postmanLogo
        }
    ];

    console.log(typescriptIcon.type);

    return (
        <div className="section-about__subsection section-about__subsection--skills">
            <h2 className="section-about__subsection__title">Compétences</h2>

            <div className="section-about__subsection__skills">
                {skills.map((skill) => (
                    <SkillCard key={skill.text} {...skill} />
                ))}
            </div>
        </div>
    );
};
