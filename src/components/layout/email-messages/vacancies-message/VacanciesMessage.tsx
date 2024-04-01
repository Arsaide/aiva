import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    number: string;
    message: string;
}

export const VacanciesMessage: React.FC<EmailTemplateProps> = ({
    name,
    number,
    message,
}) => (
    <div style={{ maxWidth: '1000px' }}>
        <div style={{ padding: '10px' }}>
            <h1 style={{ fontSize: '28px', textAlign: 'center' }}>
                ПРИСОЕДИНИТСЯ К НАШЕЙ КОМАНДЕ
            </h1>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>ФИО</h2>
            <p>{name}</p>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>
                Номер телефона:
            </h2>
            <p>{number}</p>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>О клиенте</h2>
            <p>{message}</p>
        </div>
    </div>
);
