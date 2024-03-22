'use client';
import React, { memo, useEffect, useState, useCallback } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [menuColor, setMenuColor] = useState<string>('fff');

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
            setMenuColor('#333');
        } else {
            setMenuColor('#fff');
        }
    }, [scrollPosition]);

    const toggleOpenMenu = () => {
        setIsOpenMenu(true);
    };

    const toggleCloseMenu = () => {
        setIsOpenMenu(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.header__cnt}>
                <div className={styles.header__content}>
                    <h1 className={styles.header__logo}>
                        <Link className={styles.header__logoLink} href="/">
                            <span>АИВА</span>
                            <br />
                            Транспортная компания
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
                                style={{ color: menuColor }}
                                className={styles.menu__link}
                                href="/"
                            >
                                Мы перевозим
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link
                                style={{ color: menuColor }}
                                className={styles.menu__link}
                                href={'/'}
                            >
                                Автопарк
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link
                                style={{ color: menuColor }}
                                className={styles.menu__link}
                                href={'/'}
                            >
                                Клиенты
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link
                                style={{ color: menuColor }}
                                className={styles.menu__link}
                                href={'/'}
                            >
                                Документы
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link
                                style={{ color: menuColor }}
                                className={styles.menu__link}
                                href={'/'}
                            >
                                Контакты
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link
                                className={styles.menu__link}
                                style={{ color: menuColor }}
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
