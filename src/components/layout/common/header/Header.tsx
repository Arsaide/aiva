'use client';
import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

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
                        <X color={'#fff'} width={44} height={44} />
                    </div>
                ) : (
                    <div
                        className={styles.menu__burger}
                        onClick={toggleOpenMenu}
                    >
                        <Menu color={'#fff'} width={44} height={44} />
                    </div>
                )}
                <nav
                    className={`${styles.menu} ${isOpenMenu ? styles._active : ''}`}
                >
                    <ul className={styles.menu__list}>
                        <li className={styles.menu__item}>
                            <Link className={styles.menu__link} href="/">
                                Мы перевозим
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link className={styles.menu__link} href={'/'}>
                                Автопарк
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link className={styles.menu__link} href={'/'}>
                                Клиенты
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link className={styles.menu__link} href={'/'}>
                                Документы
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link className={styles.menu__link} href={'/'}>
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

export default Header;
