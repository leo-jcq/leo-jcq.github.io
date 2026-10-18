import './Footer.scss';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <img src="/logo.svg" alt="Logo" className="footer__logo" />

            <p className="footer__text">
                &copy; {year} Léo Jacquet.
                <br />
                Conçu et développé avec React, TypeScript et SCSS.
            </p>
        </footer>
    );
}

export default Footer;
