import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    number: string;
}

export const VacanciesMessage: React.FC<EmailTemplateProps> = ({
    name,
    number,
}) => (
    <div style={{ maxWidth: '1000px', backgroundColor: 'red' }}>
        <div style={{ padding: '10px' }}>
            <h1 style={{ fontSize: '28px', textAlign: 'center' }}>Клиент</h1>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Имя</h2>
            <p>{name}</p>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>
                Номер телефона:
            </h2>
            <p>{number}</p>
        </div>
    </div>
);
