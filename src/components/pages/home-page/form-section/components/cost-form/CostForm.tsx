'use client';
import React, { memo, useEffect, useState } from 'react';
import styles from './СostForm.module.scss';
import { InputMask } from '@react-input/mask';
import { toast } from 'react-toastify';
import { validateForm } from '@/components/pages/home-page/form-section/components/cost-form/utils/validateForm';

const CostForm = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        number: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        number: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [lastSubmittedAt, setLastSubmittedAt] = useState<number | null>(null);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (lastSubmittedAt && Date.now() - lastSubmittedAt < 5 * 60 * 1000) {
            toast.error(
                'Пожалуйста, подождите 5 минут перед повторной отправкой формы',
            );
            return;
        }
        const { valid, errors: newErrors } = validateForm(inputs);

        if (valid) {
            try {
                setIsSubmitting(true);
                const response = await fetch('/api/email/send', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(inputs),
                });

                if (response.ok) {
                    toast.success('Форма успешно отправлена');
                    setInputs({
                        name: '',
                        email: '',
                        number: '',
                        message: '',
                    });
                    setErrors({
                        name: '',
                        email: '',
                        number: '',
                        message: '',
                    });
                    setLastSubmittedAt(Date.now());
                } else {
                    toast.error('Ошибка отправки формы');
                }
            } catch (error) {
                console.error('Ошибка при отправке формы:', error);
                toast.error('Ошибка отправки формы');
            } finally {
                setIsSubmitting(false);
            }
        } else {
            toast.error('Пожалуйста, заполните форму корректно!');
            setErrors(newErrors);
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
                        <span>Ваше ФИО</span>
                        {errors.name && (
                            <p className={styles.error}>{errors.name}</p>
                        )}
                    </label>
                    <label className={styles.label}>
                        <input
                            className={styles.input}
                            name={'email'}
                            type={'text'}
                            value={inputs.email}
                            onChange={e =>
                                setInputs({ ...inputs, email: e.target.value })
                            }
                            required
                        />
                        <span>Ваша почта</span>
                        {errors.email && (
                            <p className={styles.error}>{errors.email}</p>
                        )}
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
                        {errors.number && (
                            <p className={styles.error}>{errors.number}</p>
                        )}
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
                        {errors.message && (
                            <p className={styles.error}>{errors.message}</p>
                        )}
                    </label>
                </div>
                <p className={styles.alert}>
                    *Отправляя форму, вы даете согласие на обработку
                    персональных данных
                </p>
                <div className={styles.btnCnt}>
                    <button className={styles.btn}>
                        {isSubmitting ? 'Отправка...' : 'Отправить'}
                    </button>
                </div>
            </form>
        </>
    );
};

export default memo(CostForm);
