import React, { FC } from 'react';
import styles from './SmallButton.module.scss';

interface ISmallButton {
    text: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SmallButton: FC<ISmallButton> = ({ text, onClick }) => {
    return (
        <button className={styles.smallBtn} onClick={onClick}>
            {text}
        </button>
    );
};

export default SmallButton;
