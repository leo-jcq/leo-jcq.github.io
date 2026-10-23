import portrait from '@/assets/imgs/portrait.png';
import Section from '@/components/ui/Section';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import './About.scss';
import useMobileSize from '@/hooks/useMobileSize';

const TECHS = [
    'TypeScript',
    'React / Next.js',
    'Vue.js',
    'Angular',
    'C# / .NET',
    'SQL',
    'Cloud & DevOps'
];

function About() {
    const isMobile = useMobileSize();

    const [containerRef, isVisible] = useIntersectionObserver({
        threshold: isMobile ? 0.5 : 0.75
    });

    return (
        <Section ref={containerRef} id="about" index={1} title="À propos">
            <div className={`about${isVisible ? ' about--visible' : ''}`}>
                <div className="about__copy">
                    <p className="about__copy__text">
                        J’aime construire des applications à la rencontre du{' '}
                        <strong>design exigeant</strong> et de l’ingénierie solide. Mon approche :
                        comprendre le vrai problème, simplifier, puis créer une solution qui semble
                        évidente.
                    </p>
                    <p className="about__copy__text">
                        Je porte une attention particulière à la qualité du code, à l’accessibilité
                        et aux détails qui font la différence.
                    </p>
                    <p className="about__copy__text">
                        Mon expérience s’est construite à travers de nombreux projets menés à
                        l’université et en autodidacte, puis consolidée par mes expériences
                        professionnelles. Chacune de ces étapes m’a appris à concevoir des produits
                        plus solides et à mieux travailler en équipe.
                    </p>

                    <ul className="about__tech-list">
                        {TECHS.map((tech) => (
                            <li key={tech} className="about__tech-list__tech">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="about__portrait">
                    <div className="about__portrait__frame">
                        <img
                            src={portrait}
                            alt="Portrait de Léo Jacquet"
                            className="about__portrait__frame__img"
                        />
                    </div>
                    <span className="about__portrait__offset" />
                </div>
            </div>
        </Section>
    );
}

export default About;
