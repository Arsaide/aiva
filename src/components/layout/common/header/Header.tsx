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
    const [menuColor, setMenuColor] = useState<string>(Color.WHITE);
    const [headerColor, setHeaderColor] = useState<string>(Color.WHITE);
    const [burgerBackgroundColor, setBurgerBackgroundColor] = useState<string>(
        Color.WHITE,
    );

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
    }, [handleScroll]);

    useEffect(() => {
        if (scrollPosition >= window.innerHeight) {
            setMenuColor(Color.GRAY);
            setBurgerBackgroundColor(Color.WHITE);
        } else {
            setMenuColor(Color.WHITE);
            setBurgerBackgroundColor(Color.TRANSPARENT);
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

    console.log(burgerBackgroundColor === '#fff');

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
                        style={{
                            backgroundColor: burgerBackgroundColor,
                            boxShadow:
                                burgerBackgroundColor === '#fff'
                                    ? '30px -25px 0px 50px rgb(255,255,255)'
                                    : 'none',
                        }}
                    >
                        <X color={menuColor} width={44} height={44} />
                    </div>
                ) : (
                    <div
                        className={styles.menu__burger}
                        onClick={toggleOpenMenu}
                        style={{
                            backgroundColor: burgerBackgroundColor,
                            boxShadow:
                                burgerBackgroundColor === '#fff'
                                    ? '28px -25px 0px 44px rgb(255,255,255)'
                                    : 'none',
                        }}
                    >
                        <Menu color={menuColor} width={44} height={44} />
                    </div>
                )}
                <nav
                    className={`${styles.menu} ${isOpenMenu ? styles._active : ''}`}
                >
                    <ul className={styles.menu__list}>
                        <li className={styles.menu__logo}>
                            <Link href="/">
                                <Logo height={33} fill={headerColor} />
                            </Link>
                        </li>
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
                                href={'/#clients'}
                                className={styles.menu__link}
                            >
                                Клиенты
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link href={'/#cost'} className={styles.menu__link}>
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
                                href="/vacancies"
                                className={styles.menu__link}
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
