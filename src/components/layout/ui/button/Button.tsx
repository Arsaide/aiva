import React, {FC} from 'react';
import styles from './Button.module.scss'

interface IButton {
    text: string;
    href: string;
}

const Button:FC<IButton> = ({text, href}) => {
    return (
        <a href={href} className={styles.btn}>
            {text}
        </a>
    );
};

export default Button;
