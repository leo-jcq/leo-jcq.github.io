import ProjectDisplay from '@/components/ui/ProjectDisplay';
import Section from '@/components/ui/Section';
import projects from '@/data/projects';
import useCounter from '@/hooks/useCounter';
import './Projects.scss';

const DEFAULT_NB_DISPLAYED = 3;

function Projects() {
    const [nbDisplayed, displayMore, displayLess] = useCounter(
        DEFAULT_NB_DISPLAYED,
        DEFAULT_NB_DISPLAYED
    );

    return (
        <Section id="projects" index={3} title="Quelques projets">
            <div className="projects">
                {projects.slice(0, nbDisplayed).map((project, index) => (
                    <ProjectDisplay key={index} project={project} index={index} />
                ))}

                <div className="projects__actions">
                    {nbDisplayed !== DEFAULT_NB_DISPLAYED && (
                        <button
                            className="projects__action"
                            aria-label="Voir moins de projets"
                            onClick={displayLess}
                        >
                            Voir moins
                        </button>
                    )}
                    {nbDisplayed < projects.length && (
                        <button
                            className="projects__action"
                            aria-label="Voir plus de projets"
                            onClick={displayMore}
                        >
                            Voir plus
                        </button>
                    )}
                </div>
            </div>
        </Section>
    );
}

export default Projects;
