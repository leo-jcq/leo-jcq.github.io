import { FC } from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <h2 className="footer__content__title">Léo Jacquet</h2>
                <div className="footer__content__links">
                    <a
                        href="https://linkedin.com/in/léo-jacquet-113525257/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__content__links__link"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                        href="https://github.com/leo-jcq/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__content__links__link"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>

            <div className="footer__credit">
                © Copyright {new Date().getFullYear()}. Made with ♥ by{' '}
                <a
                    href="http://leo-jcq.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__credit__link"
                >
                    Léo Jacquet
                </a>
            </div>
        </footer>
    );
};

export default Footer;
