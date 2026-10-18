import SideRail from '@/components/ui/SideRail';
import socials from '@/data/socials';
import './EmailRail.scss';

function EmailRail() {
    return (
        <SideRail className="email-rail" side="right">
            <a href={`mailto:${socials.mail}`} className="email-rail__link">
                {socials.mail}
            </a>
        </SideRail>
    );
}

export default EmailRail;
