'use client';
import React from 'react';
import RecruitForm from '@/components/pages/vacancies/vacancies-form/components/recruit-form/RecruitForm';
import styles from './VacanciesForm.module.scss';

const VacanciesForm = () => {
    return (
        <section className={styles.section}>
            <div className={'container'}>
                <h2 className={styles.title}>ПРИСОЕДИНЯЙСЯ К НАШЕЙ КОМАНДЕ</h2>
                <div className={styles.content}>
                    <RecruitForm />
                </div>
            </div>
        </section>
    );
};

export default VacanciesForm;
