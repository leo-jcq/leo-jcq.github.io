import getAge from '@/utils/getAge';
import { FC } from 'react';
import './Hero.scss';

const Hero: FC = () => {
    return (
        <section id="home" className="section-hero">
            <div className="section-hero__content">
                <h1 className="section-hero__content__title">
                    Hey, je m'appelle
                    <br /> <span className="section-hero__content__title__name">Léo Jacquet</span>
                </h1>
                <p className="section-hero__content__description">
                    Je suis un jeune développeur de {getAge(new Date('2003-09-27'))} ans basé en
                    France, et je suis passionné par la création de sites web.
                </p>
                <a href="#projects" className="section-hero__content__link">
                    Projets
                </a>
            </div>
        </section>
    );
};

export default Hero;
