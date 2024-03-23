import React from 'react';
import styles from './GpsPage.module.scss';
import Card from '@/components/layout/ui/card/Card';

const GpsPage = () => {
    return (
        <section className={styles.page}>
            <div className={styles.page__container}>
                <Card
                    title={
                        'Все наши машины оснащены системой контроля GPS-навигацией с поддержкой ГЛОНАСС'
                    }
                    text={
                        'Мы всегда сможем отследить местонахождение Вашего груза и связаться с водителем'
                    }
                />
            </div>
        </section>
    );
};

export default GpsPage;
