'use client';
import React, { memo, useState } from 'react';
import styles from './СostForm.module.scss';
import { InputMask } from '@react-input/mask';
import { sendEmail } from '@/app/api/email/send/route';
import { toast } from 'react-toastify';

const CostForm = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        number: '',
        message: '',
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const result = await sendEmail(formData);
        console.log(result);
        console.log(formData);
        if (result) {
            if (result.error) {
                toast.error('Ошибка отправки формы');
            } else {
                setInputs({
                    name: '',
                    email: '',
                    number: '',
                    message: '',
                });
                toast.success('Форма успешно отправлена');
            }
        } else {
            toast.error(
                'Форма больше не активна, обратитесь к владельцу сайта!',
            );
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.content}>
                    <label className={styles.label}>
                        <input
                            className={styles.input}
                            name={'name'}
                            type={'text'}
                            value={inputs.name}
                            onChange={e =>
                                setInputs({ ...inputs, name: e.target.value })
                            }
                            required
                        />
                        <span>Ваше имя</span>
                    </label>
                    <label className={styles.label}>
                        <input
                            className={styles.input}
                            name={'email'}
                            type={'email'}
                            value={inputs.email}
                            onChange={e =>
                                setInputs({ ...inputs, email: e.target.value })
                            }
                            required
                        />
                        <span>Ваша почта</span>
                    </label>
                    <label className={styles.label}>
                        <InputMask
                            className={styles.input}
                            name={'number'}
                            mask="+7 (___) ___-__-__"
                            replacement={{ _: /\d/ }}
                            value={inputs.number}
                            onChange={e =>
                                setInputs({ ...inputs, number: e.target.value })
                            }
                            required
                        />
                        <span>Ваш телефон</span>
                    </label>
                    <label className={styles.label}>
                        <textarea
                            name={'message'}
                            className={styles.textarea}
                            value={inputs.message}
                            onChange={e =>
                                setInputs({
                                    ...inputs,
                                    message: e.target.value,
                                })
                            }
                            required
                        />
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

export default memo(CostForm);
