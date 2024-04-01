import React from 'react';
import styles from './FormSection.module.scss';
import CostForm from '@/components/pages/home-page/form-section/components/cost-form/CostForm';

const FormSection = () => {
    return (
        <section className={styles.section} id={'cost gray'}>
            <div className={'container'}>
                <div className={styles.content}>
                    <h3 className={styles.title}>
                        Рассчитать стоимость перевозки
                    </h3>
                    <CostForm />
                </div>
            </div>
        </section>
    );
};

export default FormSection;
