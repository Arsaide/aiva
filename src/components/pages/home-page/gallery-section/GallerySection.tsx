import React from 'react';
import styles from './GallerySection.module.scss';
import Image from 'next/image';

const GallerySection = () => {
    return (
        <section className={styles.page} id={'gallery'}>
            <div className={'container'}>
                <h3 className={styles.title}>Мы перевозим</h3>
                <div className={styles.content}>
                    <div className={styles.top}>
                        <div className={styles.imgContent}>
                            <div
                                className={styles.imgcnt}
                                style={{ borderTopLeftRadius: '76px' }}
                            >
                                <Image
                                    className={styles.img}
                                    src={'/materials/1.jpg'}
                                    alt={'Строй материалы, цемент, гипс'}
                                    width={300}
                                    height={250}
                                    loading={'lazy'}
                                />
                            </div>
                            <p>Строительные материалы</p>
                        </div>
                        <div className={styles.imgContent}>
                            <div className={styles.imgcnt}>
                                <Image
                                    className={styles.img}
                                    src={'/materials/2.jpg'}
                                    alt={
                                        'Металические материалы, трубы, прутья'
                                    }
                                    width={300}
                                    height={250}
                                    loading={'lazy'}
                                />
                            </div>
                            <p>Металлопрокат</p>
                        </div>
                        <div className={styles.imgContent}>
                            <div
                                className={styles.imgcnt}
                                style={{ borderTopRightRadius: '76px' }}
                            >
                                <Image
                                    className={styles.img}
                                    src={'/materials/3.jpg'}
                                    alt={'Зерновые культуры, зерно'}
                                    width={300}
                                    height={250}
                                    loading={'lazy'}
                                />
                            </div>
                            <p>Сельскохозяйственная продукция</p>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.imgContent}>
                            <div
                                className={styles.imgcnt}
                                style={{ borderBottomLeftRadius: '76px' }}
                            >
                                <Image
                                    className={styles.img}
                                    src={'/materials/4.jpg'}
                                    alt={'Мебель в офис, домой'}
                                    width={300}
                                    height={250}
                                    loading={'lazy'}
                                />
                            </div>
                            <p>Мягкая и корпусная мебель</p>
                        </div>
                        <div className={styles.imgContent}>
                            <div className={styles.imgcnt}>
                                <Image
                                    className={styles.img}
                                    src={'/materials/5.jpg'}
                                    alt={'Запчасти, оборудование'}
                                    width={300}
                                    height={250}
                                    loading={'lazy'}
                                />
                            </div>
                            <p>Оборудование и запчасти</p>
                        </div>
                        <div className={styles.imgContent}>
                            <div
                                className={styles.imgcnt}
                                style={{ borderBottomRightRadius: '76px' }}
                            >
                                <Image
                                    className={styles.img}
                                    src={'/materials/6.jpg'}
                                    alt={'Коробки, помощь с переездом'}
                                    width={300}
                                    height={250}
                                    loading={'lazy'}
                                />
                            </div>
                            <p>Домашние переезды</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
