import React from 'react';
import styles from './MainSection.module.scss';
import LargeButton from '@/components/layout/ui/buttons/large-button/LargeButton';

const MainSection = () => {
    return (
        <section className={styles.main}>
            <div className={'page__container'}>
                <div className={styles.content}>
                    <h2 className={styles.phraze}>
                        В Авангарде траспортной логистики
                    </h2>
                    <LargeButton text={'Заказать звонок'} href={'/'} />
                </div>
            </div>
        </section>
    );
};

export default MainSection;
