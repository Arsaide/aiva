import React from 'react';
import styles from './Main.module.scss';
import Button from '@/components/layout/ui/button/Button';

const Main = () => {
    return (
        <section className={styles.main}>
            <div className={'page__container'}>
                <div className={styles.content}>
                    <h2 className={styles.phraze}>
                        В Авангарде траспортной логистики
                    </h2>
                    <Button text={'Заказать звонок'} href={'/'} />
                </div>
            </div>
        </section>
    );
};

export default Main;
