import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSProperties, FC } from 'react';
import './SkillCard.scss';

export interface SkillCardProps {
    text: string;
    icon?: IconProp | JSX.Element;
    color?: string;
}

const SkillCard: FC<SkillCardProps> = ({ text, icon, color }) => {
    const style = color
        ? {
              '--color': color
          }
        : undefined;

    return (
        <div
            className={`skill-card skill-card--${text.trim().replace(' ', '_').replace('.', '').toLowerCase()}`}
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
