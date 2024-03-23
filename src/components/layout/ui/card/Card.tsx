import React, { FC } from 'react';
import styles from './Card.module.scss';

interface ICard {
    title: string;
    text: string;
}

const Card: FC<ICard> = ({ title, text }) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.card__title}>{title}</h3>
            <p className={styles.card__text}>{text}</p>
        </div>
    );
};

export default Card;
