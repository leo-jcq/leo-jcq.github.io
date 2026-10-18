import SectionLink from '@/components/ui/SectionLink';
import { ArrowRight as ArrowRightIcon } from 'react-feather';
import './Hero.scss';

function Hero() {
    return (
        <section id="hero" className="hero" aria-labelledby="hero-title">
            <div className="hero__kicker">Bonjour, moi c'est Léo.</div>

            <h1 id="hero-title" className="hero__title">
                Je transforme des idées en{' '}
                <em className="hero__title__emphasis">produits numériques.</em>
            </h1>

            <p className="hero__text">
                Développeur web fullstack basé à Grenoble, passionné par la création d'applications
                web performantes et robustes.
            </p>

            <SectionLink to="projects" className="hero__link">
                Voir mes projets
                <ArrowRightIcon />
            </SectionLink>
        </section>
    );
}

export default Hero;
