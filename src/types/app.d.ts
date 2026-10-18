export interface Experience {
    company: string;
    role: string;
    date: string;
    points: string[];
}

export interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    links: {
        code: string;
        live?: string;
    };
}
