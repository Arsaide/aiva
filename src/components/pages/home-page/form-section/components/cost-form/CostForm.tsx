'use client';
import React from 'react';
import styles from './СostForm.module.scss';
import { InputMask } from '@react-input/mask';

const CostForm = () => {
    return (
        <>
            <form className={styles.form}>
                <div className={styles.content}>
                    <label className={styles.label}>
                        <input
                            className={styles.input}
                            type={'text'}
                            required
                        />
                        <span>Ваше имя</span>
                    </label>
                    <label className={styles.label}>
                        <input
                            className={styles.input}
                            type={'email'}
                            required
                        />
                        <span>Ваша почта</span>
                    </label>
                    <label className={styles.label}>
                        <InputMask
                            className={styles.input}
                            placeholder={'+7 (___) ___-__-__'}
                            mask="+7 (___) ___-__-__"
                            replacement={{ _: /\d/ }}
                        />
                        <span>Ваш телефон</span>
                    </label>
                    <label className={styles.label}>
                        <textarea className={styles.textarea} required />
                        <span>
                            Описание перевозки(Откуда-Куда, детали перевозки)
                        </span>
                    </label>
                </div>
                <p className={styles.alert}>
                    *Отправляя форму, вы даете согласие на обработку
                    персональных данных
                </p>
                <div className={styles.btnCnt}>
                    <button className={styles.btn}>Отправить</button>
                </div>
            </form>
        </>
    );
};

export default CostForm;
