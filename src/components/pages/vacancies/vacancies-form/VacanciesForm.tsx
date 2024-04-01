'use client';
import React from 'react';
import RecruitForm from '@/components/pages/vacancies/vacancies-form/components/recruit-form/RecruitForm';
import styles from './VacanciesForm.module.scss';
import { PhoneCall } from 'lucide-react';
import { Color } from '@/lib/colors';
import Link from 'next/link';

const VacanciesForm = () => {
    return (
        <section className={styles.section}>
            <div className={'container'}>
                <h2 className={styles.title}>ПРИСОЕДИНЯЙСЯ К НАШЕЙ КОМАНДЕ</h2>
                <div className={styles.content}>
                    <div className={styles.contacts}>
                        <PhoneCall color={Color.GRAY} size={48} />
                        <div className={styles.numbers}>
                            <Link href={'tel:89002572552'}>
                                8 (900) 257-25-52
                            </Link>
                            <Link href={'tel:89000053022'}>
                                8 (900) 005-30-22
                            </Link>
                        </div>
                    </div>
                    <h3 className={styles.subTitle}>Заполнить анкету</h3>
                    <RecruitForm />
                </div>
            </div>
        </section>
    );
};

export default VacanciesForm;
