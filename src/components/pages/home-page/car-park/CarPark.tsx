'use client';
import React, { useState } from 'react';
import styles from './CarPark.module.scss';
import { carParkList } from '@/components/pages/home-page/car-park/CarParkList';
import Image from 'next/image';
import CarCard from '@/components/pages/home-page/car-park/car-card/CarCard';
import Modal from '@/components/layout/ui/modal/Modal';

const CarPark = () => {
    const [activeModalId, setActiveModalId] = useState<number | null>(null);

    return (
        <section className={styles.carpark}>
            <div className={'container'}>
                <h3 className={styles.title}>Наш Автопарк</h3>
                <ul className={styles.list}>
                    {carParkList.map(item => (
                        <React.Fragment key={item.id}>
                            <li onClick={() => setActiveModalId(item.id)}>
                                <Image
                                    src={item.card.img}
                                    alt={item.card.alt}
                                    width={300}
                                    height={200}
                                    loading={'lazy'}
                                />
                                <h4>{item.card.title}</h4>
                            </li>
                            {activeModalId === item.id && (
                                <Modal
                                    active={activeModalId === item.id}
                                    setActive={() => setActiveModalId(null)}
                                >
                                    <CarCard card={item.card} />
                                </Modal>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default CarPark;
