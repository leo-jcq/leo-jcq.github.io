import {
    csharpIcon,
    dotNetIcon,
    figmaLogo,
    gitLabLogo,
    postmanLogo,
    typescriptIcon,
    vbIcon,
    vitestLogo
} from '@/assets/assets';
import { Skill, SkillName } from '@/types/app';
import {
    faCss3,
    faGitAlt,
    faGithub,
    faHtml5,
    faJs,
    faNodeJs,
    faPhp,
    faReact,
    faSass
} from '@fortawesome/free-brands-svg-icons';

/** 
 * The skills
 * 
 * @type {Record<SkillName, Skill>}
 */
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
        text: 'C#',
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
    },
    vb: {
        text: 'VB',
        icon: vbIcon
    },
    php: {
        text: 'PHP',
        icon: faPhp,
        color: '#006be4'
    }
};

export default skills;
