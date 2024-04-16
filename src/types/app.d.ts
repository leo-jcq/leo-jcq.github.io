// prettier-ignore
export type Skill = {
    text: string;
    icon?: JSX.Element;
    color?: undefined;
} | {
    text: string;
    icon?: IconDefinition;
    color?: string;
}

export type SkillName =
    | 'html'
    | 'css'
    | 'scss'
    | 'js'
    | 'ts'
    | 'react'
    | 'node'
    | 'csharp'
    | 'dotnet'
    | 'git'
    | 'github'
    | 'gitlab'
    | 'vitest'
    | 'figma'
    | 'postman'
    | 'vb'
    | 'php';

export interface ExperienceType {
    name: string;
    description: string | JSX.Element;
    skills: SkillName[];
    codeUri?: string;
    siteUri?: string;
}
