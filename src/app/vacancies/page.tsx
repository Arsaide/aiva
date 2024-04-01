import React from 'react';
import VacanciesBanner from '@/components/pages/vacancies/vacancies-banner/VacanciesBanner';
import AllVacanciesSection from '@/components/pages/vacancies/all-vacancies-section/AllVacanciesSection';
import VacanciesForm from '@/components/pages/vacancies/vacancies-form/VacanciesForm';

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
