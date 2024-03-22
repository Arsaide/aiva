import React, { FC } from 'react';
import styles from './LargeButton.module.scss';

interface IButton {
    text: string;
    href: string;
}

const LargeButton: FC<IButton> = ({ text, href }) => {
    return (
        <a href={href} className={styles.btn}>
            {text}
        </a>
    );
};

export default LargeButton;
