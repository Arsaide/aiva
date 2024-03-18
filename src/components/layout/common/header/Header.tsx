'use client';
import React, {useEffect, useState} from 'react';
import styles from './Header.module.scss'
import Link from "next/link";
import useScrollHandler from "@/hooks/use-scroll-handler/useScrollHandler";

const Header = () => {
    const { visible } = useScrollHandler();
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

    const toggleOpenMenu = () => {
        setIsOpenMenu(true);
    }

    const toggleCloseMenu = () => {
        setIsOpenMenu(false);
    }

    const headerStyles = {
        transform: `translateY(${visible ? '0' : '-100%'})`,
        transition: `transform .3s ease-out 0s`,
    }

    return (
        <header style={headerStyles} className={styles.header}>
            <div className={styles.header__cnt}>
                <div className={styles.header__content}>
                    <h1 className={styles.header__logo}>
                        <Link className={styles.header__logoLink} href='/'>
                            <span>АИВА</span>
                            <br/>
                            Транспортная компания
                        </Link>
                    </h1>
                </div>
                {isOpenMenu ? (
                    <div className={styles.menu__burger} onClick={toggleCloseMenu}>
                        <div className={styles.menu__burgerLine}/>
                    </div>
                ) : (
                    <div className={styles.menu__burger} onClick={toggleOpenMenu}>
                        <div className={styles.menu__burgerLine}/>
                        <div className={styles.menu__burgerLine}/>
                        <div className={styles.menu__burgerLine}/>
                    </div>
                )}
                <nav className={`${styles.menu} ${isOpenMenu ? styles._active : ''}`} style={{
                    // transform: isOpenMenu ? 'translateX(0)' : 'translateX(-100%)'
                }}>
                    <ul className={styles.menu__list}>
                        <li className={styles.menu__item}>
                            <Link
                                className={styles.menu__link}
                                href='/'
                            >
                                Мы перевозим
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link
                                className={styles.menu__link}
                                href={'/'}
                            >
                                Автопарк
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link
                                className={styles.menu__link}
                                href={'/'}
                            >
                                Клиенты
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link
                                className={styles.menu__link}
                                href={'/'}
                            >
                                Документы
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link
                                className={styles.menu__link}
                                href={'/'}
                            >
                                Контакты
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link
                                className={styles.menu__link}
                                href='/vacancies'
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
