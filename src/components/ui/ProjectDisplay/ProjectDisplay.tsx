import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import useMobileSize from '@/hooks/useMobileSize';
import type { Project } from '@/types/app';
import { ExternalLink as ExternalLinkIcon, GitHub as GitHubIcon } from 'react-feather';
import ExternalLink from '../ExternalLink';
import './ProjectDisplay.scss';

type ProjectDisplayProps = {
    project: Project;
    index: number;
};

function ProjectDisplay({
    project: { title, description, tags, image, links },
    index
}: ProjectDisplayProps) {
    const isMobile = useMobileSize();
    const [containerRef, isVisible] = useIntersectionObserver({
        threshold: isMobile ? 0.25 : 0.5
    });

    const alignment = index % 2 === 0 ? 'left' : 'right';

    const ImageWrapper = links.live ? ExternalLink : 'div';

    const displayedNumber = index + 1;

    return (
        <article
            ref={containerRef}
            className={`project-display project-display--${alignment}${isVisible ? ' project-display--visible' : ''}`}
        >
            <ImageWrapper href={links.live} className="project-display__visual">
                <img
                    src={`/projects/${image}`}
                    alt={title}
                    className="project-display__visual__img"
                />
                <span className="project-display__visual__number">
                    {displayedNumber < 10 && '0'}
                    {displayedNumber}
                </span>
            </ImageWrapper>

            <div className="project-display__content">
                <h3 className="project-display__title">{title}</h3>
                <p className="project-display__description">{description}</p>

                <ul className="project-display__tags">
                    {tags.map((tag) => (
                        <li key={tag} className="project-display__tags__tag">
                            {tag}
                        </li>
                    ))}
                </ul>

                <div className="project-display__links">
                    <ExternalLink
                        href={links.code}
                        className="project-display__links__link"
                        aria-label={`Code source de ${title}`}
                    >
                        <GitHubIcon />
                    </ExternalLink>
                    {links.live && (
                        <ExternalLink
                            href={links.live}
                            className="project-display__links__link"
                            aria-label={`Voir ${title}`}
                        >
                            <ExternalLinkIcon />
                        </ExternalLink>
                    )}
                </div>
            </div>
        </article>
    );
}

export default ProjectDisplay;
