export interface ICarParkList {
    id: number;
    card: ICardList;
}

export interface ICardList {
    title: string;
    desc: string;
    img: string;
    alt: string;
    carrying: string;
    height: string;
    width: string;
    length: string;
    volume?: string;
    body: string;
    loading: string;
    truckLoading?: string;
    capacity?: string;
}
