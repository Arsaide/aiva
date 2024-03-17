import React from 'react';
import styles from './page.module.scss'
import Button from "@/components/layout/ui/button/Button";

const HomePage = () => {
    return (
        <section className={styles.page}>
            <div className={'page__container'}>
                <div className={styles.content}>
                    <h2 className={styles.phraze}>В Авангарде траспортной логистики</h2>
                    <Button text={'Заказать звонок'} href={'/'}/>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
