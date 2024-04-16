import {
    csharpIcon,
    dotNetIcon,
    figmaLogo,
    gitLabLogo,
    postmanLogo,
    typescriptIcon,
    vitestLogo
} from '@/assets/assets';
import {
    faCss3,
    faGitAlt,
    faGithub,
    faHtml5,
    faJs,
    faNodeJs,
    faReact,
    faSass,
    IconDefinition
} from '@fortawesome/free-brands-svg-icons';

const skills: Record<SkillName, Skill> = {
    html: {
        text: 'HTML',
        icon: faHtml5,
        color: '#f91111'
    },
    css: {
        text: 'CSS',
        icon: faCss3,
        color: '#2392f4'
    },
    scss: {
        text: 'SCSS',
        icon: faSass,
        color: '#ff0074'
    },
    js: {
        text: 'JavaScript',
        icon: faJs,
        color: '#ffd62C'
    },
    ts: {
        text: 'TypeScript',
        icon: typescriptIcon
    },
    react: {
        text: 'React',
        icon: faReact,
        color: '#00c0d5'
    },
    node: {
        text: 'Node.js',
        icon: faNodeJs,
        color: '#6cd853'
    },
    csharp: {
        text: 'CSharp',
        icon: csharpIcon
    },
    dotnet: {
        text: '.NET',
        icon: dotNetIcon
    },
    git: {
        text: 'Git',
        icon: faGitAlt,
        color: '#fb0000'
    },
    github: {
        text: 'GitHub',
        icon: faGithub,
        color: '#4d6e7a'
    },
    gitlab: {
        text: 'GitLab',
        icon: gitLabLogo
    },
    vitest: {
        text: 'Vitest',
        icon: vitestLogo
    },
    figma: {
        text: 'Figma',
        icon: figmaLogo
    },
    postman: {
        text: 'Postman',
        icon: postmanLogo
    }
};

export default skills;

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
    | 'postman';
