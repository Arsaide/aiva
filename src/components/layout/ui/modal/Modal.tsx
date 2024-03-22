import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';
import styles from './Modal.module.scss';

interface IModal {
    children: React.ReactNode;
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<IModal> = ({ children, active, setActive }) => {
    useEffect(() => {
        if (active) {
            document.body.style.paddingRight = '17px';
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.paddingRight = '0';
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.paddingRight = '0';
            document.body.style.overflow = '';
        };
    }, [active]);

    return (
        <div
            className={
                active ? `${styles.modal} ${styles.active}` : styles.modal
            }
            onClick={() => setActive(false)}
        >
            <div className={styles.cnt} onClick={e => e.stopPropagation()}>
                <div className={styles.content}>{children}</div>
                <button
                    className={styles.close}
                    onClick={() => setActive(false)}
                >
                    Закрыть
                </button>
            </div>
        </div>
    );
};

export default Modal;