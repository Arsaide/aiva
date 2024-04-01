'use client';
import React, { memo, useEffect, useState, useCallback } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Color } from '@/lib/colors';
import Logo from '@/components/layout/icons/logo/logo';

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [menuColor, setMenuColor] = useState<string>('fff');
    const [headerColor, setHeaderColor] = useState<string>(Color.WHITE);

    useEffect(() => {
        if (isOpenMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpenMenu]);

    const handleScroll = useCallback(() => {
        const position = window.scrollY;
        setScrollPosition(position);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollPosition >= window.innerHeight) {
            setMenuColor(Color.GRAY);
        } else {
            setMenuColor(Color.WHITE);
        }
    }, [scrollPosition]);

    const toggleOpenMenu = () => {
        setIsOpenMenu(true);
        setTimeout(() => {
            setHeaderColor(Color.GRAY);
        }, 250);
    };

    const toggleCloseMenu = () => {
        setIsOpenMenu(false);
        setTimeout(() => {
            setHeaderColor(Color.WHITE);
        }, 250);
    };

    return (
        <header className={styles.header}>
            <div className={styles.header__cnt}>
                <div className={styles.header__content}>
                    <h1 className={styles.header__logo}>
                        <Link className={styles.header__logoLink} href="/">
                            <Logo height={33} fill={headerColor} />
                        </Link>
                    </h1>
                </div>
                {isOpenMenu ? (
                    <div
                        className={styles.menu__burger}
                        onClick={toggleCloseMenu}
                    >
                        <X color={menuColor} width={44} height={44} />
                    </div>
                ) : (
                    <div
                        className={styles.menu__burger}
                        onClick={toggleOpenMenu}
                    >
                        <Menu color={menuColor} width={44} height={44} />
                    </div>
                )}
                <nav
                    className={`${styles.menu} ${isOpenMenu ? styles._active : ''}`}
                >
                    <ul className={styles.menu__list}>
                        <li className={styles.menu__item}>
                            <Link
                                href={'/#gallery'}
                                className={styles.menu__link}
                            >
                                Мы перевозим
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link
                                href={'/#carpark'}
                                className={styles.menu__link}
                            >
                                Автопарк
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link
                                href={'#clients'}
                                className={styles.menu__link}
                            >
                                Клиенты
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link className={styles.menu__link} href={'#cost'}>
                                Стоимость
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link
                                href={'#footer'}
                                className={styles.menu__link}
                            >
                                Контакты
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link
                                className={styles.menu__link}
                                href="/vacancies"
                            >
                                Вакансии
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default memo(Header);
