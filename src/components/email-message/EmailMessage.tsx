import * as React from 'react';
import Logo from '@/components/layout/icons/logo/logo';
import { Color } from '@/lib/colors';

interface EmailTemplateProps {
    name: string;
    number: string;
    email: string;
    text: string;
}

export const EmailMessage: React.FC<EmailTemplateProps> = ({
    name,
    number,
    email,
    text,
}) => (
    <div style={{ maxWidth: '1000px' }}>
        <Logo height={33} fill={Color.WHITE} />
        <div style={{ padding: '10px' }}>
            <h1 style={{ fontSize: '28px', textAlign: 'center' }}>Клиент</h1>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Имя</h2>
            <p>{name}</p>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>
                Номер телефона:
            </h2>
            <p>{number}</p>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>
                Электорнная почта:
            </h2>
            <p>{email}</p>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>
                Описание перевозки(Откуда-Куда, детали перевозки):
            </h2>
            <p>{text}</p>
        </div>
    </div>
);
