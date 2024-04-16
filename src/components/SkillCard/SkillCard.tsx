import { SkillName } from '@/types/app';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSProperties, FC } from 'react';
import './SkillCard.scss';
import skills from './skills';

interface SkillCardProps {
    name: SkillName;
}

/**
 * The skill card component
 *
 * @type {FC<SkillCardProps>}
 */
const SkillCard: FC<SkillCardProps> = ({ name }) => {
    const { text, icon, color } = skills[name];

    // prettier-ignore
    const style = color ? {
        '--color': color
    } : undefined;

    return (
        <div
            className={`skill-card skill-card--${name} skill-card--${color ? 'fa' : 'custom'}`}
            style={style as CSSProperties}
        >
            {icon && (
                <span className="skill-card__icon">
                    {(icon as JSX.Element).type ? (
                        <>{icon}</>
                    ) : (
                        <FontAwesomeIcon
                            icon={icon as IconProp}
                            className="skill-card__icon__img"
                        />
                    )}
                </span>
            )}

            <span className="skill-card__name">{text}</span>
        </div>
    );
};

export default SkillCard;
