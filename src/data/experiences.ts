import type { Experience } from '@/types/app';

const experiences: Experience[] = [
    {
        company: 'GIP FIPAG',
        role: 'Tech lead',
        date: 'Septembre 2026 - maintenant  | Février - Août 2026 (stage) | septembre 2023 - août 2024 (alternance)',
        points: [
            "Refonte complète d'une application web de pilotage budgétaire",
            'Conception du modèle de données répondant aux nouveaux besoins fonctionnels',
            'Prototypage et maquettage pour valider architecture et ergonomie',
            "Développement complet de la nouvelle version de l'application",
            "Diagnostic et résolution d'anomalies applicatives (maintenance corrective)",
            "Optimisation des performances SQL (jusqu'à 20x plus rapide)",
            "Configuration complète de l'environnement de production"
        ]
    },
    {
        company: "Carrefour systèmes d'information",
        role: 'Stage',
        date: 'Avil - Juin 2023',
        points: [
            "Maintenance et évolution d'une application web de gestion d'inventaire",
            "Correction d'anomalies impactant l'application en production",
            "Conception et développement d'évolutions fonctionnelles",
            'Migration de composants vers des technologies plus récentes',
            "Optimisation des temps de traitement de l'application",
            'Participation active à la méthodologie agile (sprints, daily meetings, rétrospectives)',
            "Immersion support informatique : une semaine au sein de l'équipe support, avec prise en charge de demandes utilisateurs"
        ]
    }
];

export default experiences;
