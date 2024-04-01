'use client';
import React, { useState } from 'react';
import styles from './AllVacanciesSection.module.scss';
import { vacanciesDB } from '@/components/pages/vacancies/all-vacancies-section/vacanciesDB';
import Image from 'next/image';
import Modal from '@/components/layout/ui/modal/Modal';
import VacanciesCard from '@/components/pages/vacancies/all-vacancies-section/vacancies-card/VacanciesCard';

const AllVacanciesSection = () => {
    const [activeModalId, setActiveModalId] = useState<number | null>(null);

    const activeCard = vacanciesDB.find(
        item => item.id === activeModalId,
    )?.card;

    return (
        <section className={styles.section}>
            <div className={'container'}>
                <h3 className={styles.title}>Вакансии</h3>
                <div className={styles.content}>
                    <ul className={styles.list}>
                        {vacanciesDB.map(item => (
                            <li
                                key={item.id}
                                onClick={() => setActiveModalId(item.id)}
                                className={styles.card}
                            >
                                <Image
                                    src={item.card.img}
                                    alt={item.card.alt}
                                    width={400}
                                    height={320}
                                    loading={'lazy'}
                                />
                                <h4 className={styles.cardTitle}>
                                    {item.card.title}
                                </h4>
                                <ul className={styles.details}>
                                    <li className={styles.item}>
                                        <p>Оплата: </p>
                                        {item.card.cost}
                                    </li>
                                    <li className={styles.item}>
                                        <p>Требуемые навыки:</p>
                                        {item.card.skills}
                                    </li>
                                    <li className={styles.item}>
                                        <p>Занятость:</p>
                                        {item.card.employment}
                                    </li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Modal
                active={activeModalId !== null}
                setActive={() => setActiveModalId(null)}
            >
                {activeCard && <VacanciesCard card={activeCard} />}
            </Modal>
        </section>
    );
};

export default AllVacanciesSection;
