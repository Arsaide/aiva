import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';
import styles from './Modal.module.scss';
import SmallButton from '@/components/layout/ui/buttons/small-button/SmallButton';
import { X } from 'lucide-react';

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
            {active && (
                <div className={styles.cnt} onClick={e => e.stopPropagation()}>
                    <div className={styles.btn}>
                        <X
                            onClick={() => setActive(false)}
                            className={styles.close}
                            width={30}
                            height={30}
                        />
                    </div>
                    <div
                        className={styles.content}
                        onClick={e => e.stopPropagation()}
                    >
                        {children}
                    </div>
                    <div className={styles.btn}>
                        <SmallButton
                            text={'Закрыть'}
                            onClick={e => {
                                e.stopPropagation();
                                setActive(false);
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
