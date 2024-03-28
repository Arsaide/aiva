import React from 'react';
import styles from './ClientsSection.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const ClientSection = () => {
    return (
        <section className={styles.section}>
            <div className={'container'}>
                <h3 className={styles.title}>Наши клиенты</h3>
                <div className={styles.content}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link href={'#'} className={styles.imgCnt}>
                                <Image
                                    className={styles.img}
                                    src={'/clients/1.png'}
                                    alt={'Компания'}
                                    fill={true}
                                />
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href={'#'} className={styles.imgCnt}>
                                <Image
                                    className={styles.img}
                                    src={'/clients/2.png'}
                                    alt={'Компания'}
                                    fill={true}
                                />
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href={'#'} className={styles.imgCnt}>
                                <Image
                                    className={styles.img}
                                    src={'/clients/3.png'}
                                    alt={'Компания'}
                                    fill={true}
                                />
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href={'#'} className={styles.imgCnt}>
                                <Image
                                    className={styles.img}
                                    src={'/clients/4.png'}
                                    alt={'Компания'}
                                    fill={true}
                                />
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href={'#'} className={styles.imgCnt}>
                                <Image
                                    className={styles.img}
                                    src={'/clients/5.png'}
                                    alt={'Компания'}
                                    fill={true}
                                />
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href={'#'} className={styles.imgCnt}>
                                <Image
                                    className={styles.img}
                                    src={'/clients/6.png'}
                                    alt={'Компания'}
                                    fill={true}
                                />
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href={'#'} className={styles.imgCnt}>
                                <Image
                                    className={styles.img}
                                    src={'/clients/7.png'}
                                    alt={'Компания'}
                                    fill={true}
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ClientSection;
