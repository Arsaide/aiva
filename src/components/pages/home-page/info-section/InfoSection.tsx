'use client';
import React, { memo, useEffect, useMemo, useState } from 'react';
import styles from './InfoSection.module.scss';
import { Star, Trophy, Truck, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const InfoSection = () => {
    const [employeeCount, setEmployeeCount] = useState<number>(0);
    const [shipmentCount, setShipmentCount] = useState<number>(0);
    const [ratingCount, setRatingCount] = useState<number>(0);
    const [ref, inView] = useInView();

    const increaseCount = useMemo(
        () =>
            (
                target: number,
                setter: React.Dispatch<React.SetStateAction<number>>,
            ) => {
                const step: number = target / 100;
                let current: number = 0;

                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        clearInterval(timer);
                        current = target;
                    }
                    setter(Math.floor(current));
                }, 20);
            },
        [],
    );

    useEffect(() => {
        if (inView) {
            increaseCount(100, setEmployeeCount);
            increaseCount(1000, setShipmentCount);
            increaseCount(5, setRatingCount);
        }
    }, [inView]);

    return (
        <section ref={ref} className={styles.section}>
            <div className="container">
                <h3 className={styles.title}>Мы в цифрах</h3>
                <div className={styles.content}>
                    <ul className={styles.icons}>
                        <li className={styles.icon}>
                            <Users width={100} height={100} />
                        </li>
                        <li className={styles.mobileCard}>
                            <p>Штат более</p>
                            <strong>
                                {employeeCount === 100
                                    ? `${employeeCount}+`
                                    : employeeCount}
                            </strong>
                            <p>сотрудников</p>
                        </li>
                        <li className={styles.icon}>
                            <Truck width={100} height={100} />
                        </li>
                        <li className={styles.mobileCard}>
                            <p>Более</p>
                            <strong>
                                {shipmentCount === 1000
                                    ? `${shipmentCount}+`
                                    : shipmentCount}
                            </strong>
                            <p>грузоперевозок за месяц</p>
                        </li>
                        <li className={styles.icon}>
                            <Trophy width={100} height={100} />
                        </li>
                        <li className={styles.mobileCard}>
                            <p>Высокий</p>
                            <strong>{ratingCount}</strong>
                            <p>рейтинг в ATI</p>
                        </li>
                    </ul>
                    <ul className={styles.cards}>
                        <li className={styles.card}>
                            <p>Штат более</p>
                            <strong>
                                {employeeCount === 100
                                    ? `${employeeCount}+`
                                    : employeeCount}
                            </strong>
                            <p>сотрудников</p>
                        </li>
                        <li className={styles.card}>
                            <p>Более</p>
                            <strong>
                                {shipmentCount === 1000
                                    ? `${shipmentCount}+`
                                    : shipmentCount}
                            </strong>
                            <p>грузоперевозок за месяц</p>
                        </li>
                        <li className={styles.card}>
                            <p>Высокий</p>
                            <strong>
                                {ratingCount}
                                <Star width={16} height={16} fill={'#DA291C'} />
                            </strong>
                            <p>рейтинг в ATI</p>
                        </li>
                    </ul>
                </div>
                <h3 className={styles.subTitle}>
                    Грузоперевозки по всей РОССИИ
                </h3>
            </div>
        </section>
    );
};

export default memo(InfoSection);
