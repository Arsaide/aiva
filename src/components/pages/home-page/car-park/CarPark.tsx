'use client';
import React, { useState } from 'react';
import styles from './CarPark.module.scss';
import { carParkDB } from '@/components/pages/home-page/car-park/CarParkDB';
import Image from 'next/image';
import CarCard from '@/components/pages/home-page/car-park/car-card/CarCard';
import Modal from '@/components/layout/ui/modal/Modal';
import SmallButton from '@/components/layout/ui/buttons/small-button/SmallButton';

const CarPark = () => {
    const [activeModalId, setActiveModalId] = useState<number | null>(null);
    const [visibleItems, setVisibleItems] = useState<number>(
        window.innerWidth < 1479.98 ? 3 : 4,
    );
    const [loadedItems, setLoadedItems] = useState<number>(visibleItems);

    const handleLoadMore = () => {
        setLoadedItems(prevLoadedItems => prevLoadedItems + visibleItems);
    };

    const activeCar = carParkDB.find(item => item.id === activeModalId)?.card;

    return (
        <section className={styles.carpark}>
            <div className={'container'}>
                <h3 className={styles.title}>Наш Автопарк</h3>
                <ul className={styles.list}>
                    {(window.innerWidth >= 878.98
                        ? carParkDB.slice(0, loadedItems)
                        : carParkDB
                    ).map(item => (
                        <li
                            key={item.id}
                            onClick={() => setActiveModalId(item.id)}
                            className={styles.card}
                        >
                            <Image
                                src={item.card.img}
                                alt={item.card.alt}
                                width={254}
                                height={171}
                                loading={'lazy'}
                            />
                            <h4 className={styles.card__title}>
                                {item.card.title}
                            </h4>
                        </li>
                    ))}
                </ul>
                {window.innerWidth >= 878.98 &&
                    loadedItems < carParkDB.length && (
                        <SmallButton
                            text={'Загрузить еще'}
                            onClick={handleLoadMore}
                        />
                    )}
            </div>
            <Modal
                active={activeModalId !== null}
                setActive={() => setActiveModalId(null)}
            >
                {activeCar && <CarCard card={activeCar} />}
            </Modal>
        </section>
    );
};

export default CarPark;
