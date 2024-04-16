import getAge from '@/utils/getAge';
import { FC } from 'react';
import { Link } from 'react-scroll';
import './Hero.scss';

/**
 * The hero section
 *
 * @type {FC}
 */
const Hero: FC = () => {
    return (
        <section id="hero" className="section-hero">
            <div className="section-hero__content">
                <h1 className="section-hero__content__title">
                    Hey, je m'appelle
                    <br /> <span className="section-hero__content__title__name">Léo Jacquet</span>
                </h1>
                <p className="section-hero__content__description">
                    Je suis un jeune développeur de {getAge(new Date('2003-09-27'))} ans basé en
                    France, et je suis passionné par la création de sites web.
                </p>
                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={100}
                    className="section-hero__content__link"
                >
                    A propos de moi
                </Link>
            </div>

            <span className="section-hero__mouse" />
        </section>
    );
};

export default Hero;
