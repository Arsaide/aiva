'use client';
import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import Logo from '@/components/layout/icons/logo/logo';
import { Color } from '@/lib/colors';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer} id={'footer'}>
            <div className={'container'}>
                <div className={styles.content}>
                    <div className={styles.menu}>
                        <ul className={styles.navList}>
                            <li className={styles.item}>
                                <Link
                                    href={'/#gallery'}
                                    className={styles.link}
                                >
                                    Мы перевозим
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link
                                    href={'/#carpark'}
                                    className={styles.link}
                                >
                                    Автопарк
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link
                                    href={'/#clients'}
                                    className={styles.link}
                                >
                                    Клиенты
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link href={'/#cost'} className={styles.link}>
                                    Стоимость
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link
                                    href={'/vacancies'}
                                    className={styles.link}
                                >
                                    Вакансии
                                </Link>
                            </li>
                        </ul>
                        <ul className={styles.contactList}>
                            <li className={styles.item}>
                                Адрес: <br /> <span>г.Краснодар</span>
                            </li>
                            <li className={styles.item}>
                                Телефон:
                                <br />
                                <span>
                                    <Link
                                        className={styles.link}
                                        href={'tel: +78612175722'}
                                    >
                                        +7 (861) 217-57-22
                                    </Link>
                                </span>
                            </li>
                            <li className={styles.item}>
                                Почта:
                                <br />
                                <span>
                                    <Link
                                        className={styles.link}
                                        href={'mailto: info@tk-avangard.com'}
                                    >
                                        info@tk-avangard.com
                                    </Link>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.logo}>
                            <Link href={''}>
                                <Logo height={30} fill={Color.WHITE} />
                            </Link>
                        </div>
                        <div className={styles.copyright}>
                            &copy; «ТК АИВА», {currentYear} г. Все права
                            защищены
                        </div>
                        <div className={styles.authors}>
                            Design | developer by{' '}
                            <Link className={styles.author} href={''}>
                                Shahir
                            </Link>{' '}
                            |{' '}
                            <Link
                                className={styles.author}
                                href={'https://github.com/Arsaide'}
                            >
                                Arsaide
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
