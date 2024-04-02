import React from 'react';
import VacanciesBanner from '@/components/pages/vacancies/vacancies-banner/VacanciesBanner';
import AllVacanciesSection from '@/components/pages/vacancies/all-vacancies-section/AllVacanciesSection';
import VacanciesForm from '@/components/pages/vacancies/vacancies-form/VacanciesForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'АИВА - Вакансии',
    description:
        'АИВА Грузоперевозки – ваш надежный партнер в организации перевозок ' +
        'грузов по всей России. Мы предоставляем высококачественные услуги по ' +
        'доставке грузов различного типа и объема, обеспечивая оперативность, ' +
        'безопасность и надежность на всех этапах транспортировки. Наша компания' +
        ' основана на принципах профессионализма, эффективности и индивидуального' +
        ' подхода к каждому клиенту, стремясь удовлетворить самые высокие требования.',
    keywords:
        'грузоперевозки, транспортная логистика, доставка грузов, вся Россия,' +
        ' надежность, профессионализм, оперативность, безопасность,' +
        ' индивидуальный подход, качество услуг, страховка',
};

const VacanciesPage = () => {
    return (
        <>
            <VacanciesBanner />
            <AllVacanciesSection />
            <VacanciesForm />
        </>
    );
};

export default VacanciesPage;
