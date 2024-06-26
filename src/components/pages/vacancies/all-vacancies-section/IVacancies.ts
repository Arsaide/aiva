export interface IVacancies {
    id: number;
    card: IVacanciesCard;
}

export interface IVacanciesCard {
    alt: string;
    title: string;
    cost: string;
    skills: string;
    employment: string;
    desc: string;
}
