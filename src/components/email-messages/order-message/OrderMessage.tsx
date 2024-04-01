import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    number: string;
    email?: string | undefined;
    text?: string | undefined;
}

export const OrderMessage: React.FC<EmailTemplateProps> = ({
    name,
    number,
    email,
    text,
}) => (
    <div style={{ maxWidth: '1000px' }}>
        <div style={{ padding: '10px' }}>
            <h1 style={{ fontSize: '28px', textAlign: 'center' }}>Клиент</h1>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Имя</h2>
            <p>{name}</p>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>
                Номер телефона:
            </h2>
            <p>{number}</p>
            {email && (
                <>
                    <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        Электорнная почта:
                    </h2>
                    <p>{email}</p>
                    <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        Описание перевозки(Откуда-Куда, детали перевозки):
                    </h2>
                </>
            )}
            {text && <p>{text}</p>}
        </div>
    </div>
);
