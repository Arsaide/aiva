// 'use server';

import * as React from 'react';
import styles from './EmailMessage.module.scss';
import Logo from '@/components/layout/icons/logo/logo';
import Link from 'next/link';
import { Color } from '@/lib/colors';

interface EmailTemplateProps {
    name: string;
    number: string;
    email: string;
    text: string;
}

export const EmailMessage: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    number,
    email,
    text,
}) => (
    <div className={styles.cnt}>
        <div className={styles.content}>
            <h1 className={styles.title}>Клиент</h1>
            <h2 className={styles.subTitle}>Имя</h2>
            <p className={styles.text}>{name}</p>
            <h2 className={styles.subTitle}>Номер телефона:</h2>
            <p className={styles.text}>{number}</p>
            <h2 className={styles.subTitle}>Электорнная почта:</h2>
            <p className={styles.text}>{email}</p>
            <h2 className={styles.subTitle}>
                Описание перевозки(Откуда-Куда, детали перевозки):
            </h2>
            <p className={styles.text}>{text}</p>
        </div>
    </div>
);
