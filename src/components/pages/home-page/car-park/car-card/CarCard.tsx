import React, { FC } from 'react';
import Image from 'next/image';
import { ICardList } from '@/components/pages/home-page/car-park/ICarParkList';
import styles from './CarCard.module.scss';

interface ICarCard {
    card: ICardList;
}

const CarCard: FC<ICarCard> = ({ card }) => {
    return (
        <div className={styles.content}>
            <div className={styles.image}>
                <Image src={card.img} alt={card.alt} width={254} height={171} />
                <h5 className={styles.title}>{card.title}</h5>
            </div>
            <div className={styles.props}>
                <p className={styles.desc}>{card.desc}</p>
                <ul className={styles.propsList}>
                    <li className={styles.prop}>
                        <strong>Грузоподъемность</strong> - {card.carrying}
                    </li>
                    <li className={styles.prop}>
                        <strong>Высота</strong> - {card.height}
                    </li>
                    <li className={styles.prop}>
                        <strong>Ширина</strong> - {card.width}
                    </li>
                    <li className={styles.prop}>
                        <strong>Длина</strong> - {card.length}
                    </li>
                    {card.volume && (
                        <li className={styles.prop}>
                            <strong>Объем</strong> - {card.volume}
                        </li>
                    )}
                    <li className={styles.prop}>
                        <strong>Кузов</strong> - {card.body}
                    </li>
                    <li className={styles.prop}>
                        <strong>Погрузка</strong> - {card.loading}
                    </li>
                    {card.truckLoading && (
                        <li className={styles.prop}>
                            <strong>Погрузка фуры</strong> - {card.truckLoading}
                        </li>
                    )}
                    {card.capacity && (
                        <li className={styles.prop}>
                            <strong>Вместимость</strong> - {card.capacity}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default CarCard;
