import React, { FC } from 'react';
import styles from './GpsBannerSection.module.scss';
import Card from '@/components/layout/ui/card/Card';

interface IBannerPage {
    title: string;
    text: string;
}

const GpsBannerSection: FC<IBannerPage> = ({ title, text }) => {
    return (
        <section className={styles.page}>
            <div className={'container'}>
                <div className={styles.content}>
                    <Card title={title} text={text} />
                </div>
            </div>
        </section>
    );
};

export default GpsBannerSection;
