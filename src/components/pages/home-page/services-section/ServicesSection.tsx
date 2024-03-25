import React from 'react';
import styles from './ServicesSection.module.scss';
import { Clock } from 'lucide-react';

const ServicesSection = () => {
    return (
        <section className={styles.section}>
            <div className={'container'}>
                <h3 className={styles.title}>Наши преимущества</h3>
                <div className={styles.content}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <div className={styles.icon}>
                                <Clock width={40} height={40} />
                            </div>
                            <div className={styles.desc}>
                                Собственный автопарк
                            </div>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.icon}>
                                <Clock width={40} height={40} />
                            </div>
                            <div className={styles.desc}>
                                Быстрый возврат документов
                            </div>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.icon}>
                                <Clock width={40} height={40} />
                            </div>
                            <div className={styles.desc}>
                                Доставка груза в срок
                            </div>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.icon}>
                                <Clock width={40} height={40} />
                            </div>
                            <div className={styles.desc}>
                                Ответственный менеджер 24/7
                            </div>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.icon}>
                                <Clock width={40} height={40} />
                            </div>
                            <div className={styles.desc}>
                                Ваш груз под защитой
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
