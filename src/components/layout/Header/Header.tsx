import ExternalLink from '@/components/ui/ExternalLink';
import SectionLink from '@/components/ui/SectionLink';
import { MAIN_COLORS } from '@/constants/style';
import links from '@/data/links';
import { useEffect, useState } from 'react';
import './Header.scss';

/**
 * The header of the application.
 *
 * @export
 */
function Header() {
    // Open/close state
    const [isOpen, setIsOpen] = useState(false);

    const openState = isOpen ? 'open' : 'close';

    const close = () => setIsOpen(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <header className="header">
            <SectionLink to="hero" className="header__logo">
                <img
                    src="/logo.svg"
                    alt="Logo"
                    className="header__logo__img"
                    fetchPriority="high"
                />
            </SectionLink>

            <nav
                className={`header__nav-bar header__nav-bar--${openState}`}
                aria-label="Navigation principale"
            >
                <ol className="header__nav-bar__list">
                    {links.map((link, index) => (
                        <li
                            key={link.to}
                            className="header__nav-bar__list__item"
                            style={{ animationDelay: `0.${index + 1}s` }}
                        >
                            <SectionLink
                                to={link.to}
                                className="header__nav-bar__list__item__link"
                                aria-label={`Aller à ${(link.title ?? link.text).toLowerCase()}`}
                                onClick={close}
                            >
                                <span
                                    className="header__nav-bar__list__item__link__number"
                                    style={{ color: MAIN_COLORS[index % MAIN_COLORS.length] }}
                                >
                                    0{index + 1}.{' '}
                                </span>
                                {link.text}
                            </SectionLink>
                        </li>
                    ))}
                </ol>

                <ExternalLink
                    href="/CV.pdf"
                    className="header__nav-bar__resume"
                    aria-label="Voir le CV"
                >
                    CV
                </ExternalLink>
                <button
                    className={`header__nav-bar__btn header__nav-bar__btn--${openState}`}
                    aria-label={`${isOpen ? 'Fermer' : 'Ouvrir'} le menu`}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((prev) => !prev)}
                />
            </nav>
        </header>
    );
}

export default Header;
