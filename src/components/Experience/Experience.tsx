import { ExperienceType } from '@/types/app';
import { FC } from 'react';
import SkillCard from '../SkillCard/SkillCard';
import './Experience.scss';

interface ExperienceProps {
    experience: ExperienceType;
}

/**
 * The experience component
 *
 * @type {FC<ExperienceProps>}
 */
const Experience: FC<ExperienceProps> = ({
    experience: { name, description, skills, codeUri, siteUri }
}) => {
    return (
        <div className="experience">
            <div className="experience__content">
                <h3 className="experience__content__title">{name}</h3>
                <p className="experience__content__description">{description}</p>
                <div className="experience__content__skills">
                    {skills.map((skillName) => (
                        <SkillCard name={skillName} />
                    ))}
                </div>
                {codeUri && (
                    <a
                        href={codeUri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience__content__link"
                    >
                        Code
                    </a>
                )}
                {siteUri && (
                    <a
                        href={siteUri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience__content__link"
                    >
                        Aperçu
                    </a>
                )}
            </div>
        </div>
    );
};

export default Experience;
