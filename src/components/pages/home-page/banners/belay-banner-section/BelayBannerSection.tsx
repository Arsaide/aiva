import React, { FC, useEffect, useState } from 'react';
import styles from './BelayBannerSection.module.scss';
import Card from '@/components/layout/ui/card/Card';

interface IBannerPage {
    title: string;
    text: string;
}

const BelayBannerSection: FC<IBannerPage> = ({ title, text }) => {
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

export default BelayBannerSection;
