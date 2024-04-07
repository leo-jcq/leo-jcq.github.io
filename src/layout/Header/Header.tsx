import useOpen from '@/hooks/useOpen';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import './Header.scss';

const Header: FC = () => {
    return (
        <header className="header">
            <div className="header__content">
                <img src="/logo.svg" alt="Logo" className="header__content__logo" />
                <span className="header__content__name">Léo Jacquet</span>
            </div>

            <NavBar />
        </header>
    );
};

export default Header;

const NavBar: FC = () => {
    const { openState, isOpen, switchOpenState } = useOpen();

    return (
        <nav className={`nav-bar nav-bar--${openState}`}>
            <button className="nav-bar__open" onClick={switchOpenState}>
                <FontAwesomeIcon className="nav-bar__open__icon" icon={isOpen ? faTimes : faBars} />
            </button>

            <div className="nav-bar__container">
                <ul className="nav-bar__container__list">
                    <li className="nav-bar__container__list__item">
                        <a href="#home" className="nav-bar__container__list__item__link">
                            Accueil
                        </a>
                    </li>
                    <li className="nav-bar__container__list__item">
                        <a href="#about" className="nav-bar__container__list__item__link">
                            A propos
                        </a>
                    </li>
                    <li className="nav-bar__container__list__item">
                        <a href="#projects" className="nav-bar__container__list__item__link">
                            Projets
                        </a>
                    </li>
                    <li className="nav-bar__container__list__item">
                        <a href="#contact" className="nav-bar__container__list__item__link">
                            Contacte
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
