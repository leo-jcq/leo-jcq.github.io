import ExternalLink from '@/components/ui/ExternalLink';
import SideRail from '@/components/ui/SideRail';
import socials from '@/data/socials';
import { GitHub as GithubIcon, Linkedin as LinkedinIcon } from 'react-feather';
import './SocialRail.scss';

function SocialRail() {
    return (
        <SideRail className="social-rail" side="left">
            <ExternalLink href={socials.gitHub} className="social-rail__link" aria-label="GitHub">
                <GithubIcon size={20} />
            </ExternalLink>

            <ExternalLink
                href={socials.linkedIn}
                className="social-rail__link"
                aria-label="Linkedin"
            >
                <LinkedinIcon size={20} />
            </ExternalLink>
        </SideRail>
    );
}

export default SocialRail;
