import React from 'react';
import styles from './VacanciesBanner.module.scss';

const VacanciesBanner = () => {
    return (
        <section className={styles.main}>
            <div className={'page__container'}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <h2 className={styles.phraze}>
                            Стань частью нашей команды
                        </h2>
                        <p className={styles.desc}>
                            Мы уверены, что наш успех возможен только благодаря
                            нашим сотрудникам! Нам нужны люди, готовые сообща
                            делать одно большое дело, получать большую оплату и
                            огромное удовольствие от работы.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VacanciesBanner;
