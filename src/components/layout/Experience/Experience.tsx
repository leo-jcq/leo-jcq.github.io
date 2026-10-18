import Section from '@/components/ui/Section';
import experiences from '@/data/experiences';
import type { Experience as ExperienceType } from '@/types/app';
import { useState } from 'react';
import './Experience.scss';

const getTabId = (experience: ExperienceType) =>
    `experience-tab-${experience.company.replaceAll(' ', '-')}`;

function Experience() {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeExperience = experiences[activeIndex];

    return (
        <Section id="experience" index={2} title="Expérience">
            <div className="experience">
                <div className="experience__tabs" role="tablist" aria-label="Expériences">
                    {experiences.map((experience, index) => (
                        <button
                            key={experience.company}
                            id={getTabId(experience)}
                            className={`experience__tabs__tab${activeIndex === index ? ' experience__tabs__tab--active' : ''}`}
                            role="tab"
                            aria-selected={activeIndex === index}
                            onClick={() => setActiveIndex(index)}
                        >
                            <span className="experience__tabs__tab__number">0{index + 1}</span>
                            {experience.company}
                        </button>
                    ))}
                </div>

                <div
                    className="experience__panel"
                    role="tabpanel"
                    aria-labelledby={getTabId(activeExperience)}
                >
                    <h3 className="experience__panel__title">
                        {activeExperience.role}{' '}
                        <span className="experience__panel__title__company">
                            @ {activeExperience.company}
                        </span>
                    </h3>
                    <p className="experience__panel__date">{activeExperience.date}</p>
                    <ul className="experience__panel__points">
                        {activeExperience.points.map((point) => (
                            <li key={point} className="experience__panel__points__point">
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
}

export default Experience;
