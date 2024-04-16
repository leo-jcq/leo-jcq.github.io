import { ExperienceType } from '@/types/app';

const experiences: ExperienceType[] = [
    {
        name: 'Alternance, GIP FIPAG',
        description:
            "Ma mission au cours de cette alternance a été de réécrire une application (site web) de pilotage budgétaire (analyse des coûts, recettes, ...). J'ai donc commencé par aider à concevoir le cahier des charges, puis crée un nouveau modèle de données afin de correspondre au cahier des charges. J'ai ensuite choisi de développer la nouvelle application avec React pour la partie front-end et .NET pour la partie back-end.",
        skills: ['html', 'scss', 'ts', 'react', 'csharp', 'dotnet']
    },
    {
        name: "Stage, Carrefour Systèmes d'Information",
        description:
            "Durant ce stage de 10 semaines chez Carrefour Systèmes d'Information, j'ai eu l'occasion de maintenir une application de gestion des stocks au sein d'une équipe d'une dizaine de développeurs. J'y ai découvert la résolution de tickets, l'utilisation poussée de Git, et les langages VisualBasic et C# avec le framework .NET.",
        skills: ['html', 'css', 'js', 'csharp', 'vb', 'dotnet']
    },
    {
        name: "Développement d'un site de vente aux enchères",
        description:
            "Ce projet universitaire m'a familiarisé avec la conception d'interfaces utilisateur, le développement en équipe, et la programmation web.",
        skills: ['html', 'css', 'js', 'php']
    },
    {
        name: "Sites d'entraînement",
        description: (
            <>
                J'ai réalisé de nombreux sites d'entraînement en autodidacte afin de renforcer mes
                compétences en développement web. La plupart sont des exercices d'entraînement
                provenant du site{' '}
                <a
                    href="https://www.frontendmentor.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="section-experiences__link"
                >
                    Frontend Mentor
                </a>{' '}
                et sont accessibles sur mon{' '}
                <a
                    href="https://github.com/leo-jcq/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="section-experiences__link"
                >
                    GitHub
                </a>
                .
            </>
        ),
        skills: ['html', 'css', 'scss', 'js', 'ts', 'react']
    }
];

export default experiences;
