import React, { FC } from 'react';
import styles from './LargeButton.module.scss';
import Link from 'next/link';

interface IButton {
    text: string;
    href: string;
}

const LargeButton: FC<IButton> = ({ text, href }) => {
    return (
        <Link href={href} className={styles.btn}>
            {text}
        </Link>
    );
};

export default LargeButton;
