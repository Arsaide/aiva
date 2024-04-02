import React, { FC } from 'react';
import styles from './VacanciesCard.module.scss';
import Image from 'next/image';
import { IVacanciesCard } from '@/components/pages/vacancies/all-vacancies-section/IVacancies';

interface ICard {
    card: IVacanciesCard;
}

const VacanciesCard: FC<ICard> = ({ card }) => {
    return (
        <div className={styles.content}>
            <div className={styles.image}>
                {/*<Image src={card.img} alt={card.alt} width={254} height={171} />*/}
                <h5 className={styles.title}>{card.title}</h5>
            </div>
            <div className={styles.props}>
                <p className={styles.desc}>{card.desc}</p>
                <ul className={styles.propsList}>
                    <li className={styles.prop}>
                        <strong>Оплата</strong> - {card.cost}
                    </li>
                    <li className={styles.prop}>
                        <strong>Требуемые навыки</strong> - {card.skills}
                    </li>
                    <li className={styles.prop}>
                        <strong>Занятость</strong> - {card.employment}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default VacanciesCard;
