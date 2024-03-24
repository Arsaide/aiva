'use client';
import React, { FC, useEffect, useState } from 'react';
import styles from './BannerSection.module.scss';
import Card from '@/components/layout/ui/card/Card';

interface IBannerPage {
    bg: string;
    title: string;
    text: string;
    mr?: number;
    ml?: number;
    left?: boolean;
    right?: boolean;
}

const BannerSection: FC<IBannerPage> = ({
    bg,
    title,
    text,
    mr,
    ml,
    left = false,
    right = false,
}) => {
    const [margins, setMargins] = useState({
        mRight: mr,
        mLeft: ml,
    });

    useEffect(() => {
        if (window.innerWidth <= 879.98) {
            setMargins({ mRight: 0, mLeft: 0 });
        } else {
            setMargins({ mRight: mr, mLeft: ml });
        }
    }, []);

    const pseudoElementStyles: React.CSSProperties = {
        content: "''",
        width: '50%',
        height: '100%',
        backdropFilter: 'blur(20.5px)',
        position: 'absolute',
        zIndex: 2,
        top: 0,
    };

    if (left && !right) {
        pseudoElementStyles.left = 0;
    } else if (right && !left) {
        pseudoElementStyles.right = 0;
        delete pseudoElementStyles.left;
    }

    return (
        <section
            className={styles.page}
            style={{
                background: `url(${bg}) 0 65%/cover no-repeat`,
                position: 'relative',
            }}
        >
            <div className={'container'}>
                <div
                    className={styles.content}
                    style={{
                        marginRight: `${margins.mRight}px`,
                        marginLeft: `${margins.mLeft}px`,
                    }}
                >
                    <Card title={title} text={text} />
                </div>
            </div>
            <div style={pseudoElementStyles} />
        </section>
    );
};

export default BannerSection;
