import useOpen from '@/hooks/useOpen';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
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
    const { openState, isOpen, switchOpenState, close } = useOpen();
    const openBtnRef = useRef<HTMLButtonElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                !openBtnRef.current?.contains(e.target as Node) &&
                !containerRef.current?.contains(e.target as Node)
            ) {
                close();
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [close]);

    return (
        <nav className={`nav-bar nav-bar--${openState}`}>
            <button className="nav-bar__open" onClick={switchOpenState} ref={openBtnRef}>
                <FontAwesomeIcon className="nav-bar__open__icon" icon={isOpen ? faTimes : faBars} />
            </button>

            <div className="nav-bar__container" ref={containerRef}>
                <ul className="nav-bar__container__list">
                    <li className="nav-bar__container__list__item">
                        <Link
                            to="hero"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="nav-bar__container__list__item__link"
                            onClick={close}
                        >
                            Accueil
                        </Link>
                    </li>
                    <li className="nav-bar__container__list__item">
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="nav-bar__container__list__item__link"
                            onClick={close}
                        >
                            A propos
                        </Link>
                    </li>
                    <li className="nav-bar__container__list__item">
                        <Link
                            to="experiences"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="nav-bar__container__list__item__link"
                            onClick={close}
                        >
                            Expériences
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
