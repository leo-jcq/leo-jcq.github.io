import ExternalLink from '@/components/ui/ExternalLink';
import socials from '@/data/socials';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import useMobileSize from '@/hooks/useMobileSize';
import './Contact.scss';

function Contact() {
    const isMobile = useMobileSize();

    const [containerRef, isVisible] = useIntersectionObserver({
        threshold: isMobile ? 0.5 : 0.75
    });

    return (
        <section
            ref={containerRef}
            id="contact"
            className={`contact${isVisible ? ' contact--visible' : ''}`}
        >
            <div className="contact__heading">
                <span className="contact__heading__number">04</span>
                <h2 className="contact__heading__title">Et maintenant ?</h2>
            </div>

            <h3 className="contact__subtitle">
                Et si on travaillait <em className="contact__subtitle__emphasis">ensemble ?</em>
            </h3>

            <p className="contact__text">
                Je suis actuellement à la recherche d’un poste où je pourrai mettre mes compétences
                au service d’un produit ambitieux. Une opportunité, un projet ou simplement l’envie
                d’échanger ? Contactez-moi par{' '}
                <a href={`mailto:${socials.mail}`} className="contact__link">
                    mail
                </a>{' '}
                ou sur{' '}
                <ExternalLink href={socials.linkedIn} className="contact__link">
                    LinkedIn
                </ExternalLink>
                . Je vous répondrai avec plaisir.
            </p>
        </section>
    );
}

export default Contact;
