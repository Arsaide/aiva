'use client';
import React, { useEffect, useState } from 'react';
import styles from './CarPark.module.scss';
import { carParkDB } from '@/components/pages/home-page/car-park/CarParkDB';
import Image from 'next/image';
import CarCard from '@/components/pages/home-page/car-park/car-card/CarCard';
import Modal from '@/components/layout/ui/modal/Modal';
import SmallButton from '@/components/layout/ui/buttons/small-button/SmallButton';

const CarPark = () => {
    const [activeModalId, setActiveModalId] = useState<number | null>(null);
    const [visibleItems, setVisibleItems] = useState<number>(3);
    const [loadedItems, setLoadedItems] = useState<number>(visibleItems);
    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setVisibleItems(windowWidth < 1479.98 ? 3 : 4);
    }, [windowWidth]);

    useEffect(() => {
        setLoadedItems(visibleItems);
    }, [visibleItems]);

    const handleLoadMore = () => {
        setLoadedItems(prevLoadedItems => prevLoadedItems + visibleItems);
    };

    const activeCar = carParkDB.find(item => item.id === activeModalId)?.card;

    return (
        <section className={styles.carpark}>
            <div className={'container'}>
                <h3 className={styles.title}>Наш Автопарк</h3>
                <ul className={styles.list}>
                    {carParkDB
                        .slice(
                            0,
                            windowWidth >= 878.98
                                ? loadedItems
                                : carParkDB.length,
                        )
                        .map(item => (
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
                {windowWidth >= 878.98 && loadedItems < carParkDB.length && (
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
