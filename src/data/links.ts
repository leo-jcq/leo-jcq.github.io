interface NavLink {
    to: string;
    text: string;
    title?: string;
}

const links: NavLink[] = [
    {
        to: 'about',
        text: 'À propos'
    },
    {
        to: 'experience',
        title: 'Expérience professionnelle',
        text: 'Expérience'
    },
    {
        to: 'projects',
        text: 'Projets'
    },
    {
        to: 'contact',
        title: 'Me contacter',
        text: 'Contact'
    }
];

export default links;
