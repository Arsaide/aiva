import React, { FC } from 'react';
import Image from 'next/image';
import { ICardList } from '@/components/pages/home-page/car-park/ICarParkList';
import styles from './CarCard.module.scss';

interface ICarCard {
    card: ICardList;
}

const CarCard: FC<ICarCard> = ({ card }) => {
    return (
        <div>
            <Image src={card.img} alt={card.alt} width={300} height={200} />
            <h5>{card.title}</h5>
            <p>{card.desc}</p>
            <ul>
                <li>{card.carrying}</li>
                <li>{card.height}</li>
                <li>{card.width}</li>
                <li>{card.length}</li>
                {card.volume && <li>{card.volume}</li>}
                <li>{card.body}</li>
                <li>{card.loading}</li>
                {card.truckLoading && <li>{card.truckLoading}</li>}
                {card.capacity && <li>{card.capacity}</li>}
            </ul>
        </div>
    );
};

export default CarCard;
