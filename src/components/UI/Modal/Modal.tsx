import React, {FC, ReactNode, useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "pages/_app";
import {XIcon} from "static/icons/icon";
import styles from './Modal.module.scss'

interface ModalProps {
    children: ReactNode
}

const Modal: FC<ModalProps> = ({ children }) => {
    const { authStore } = useContext(Context)

    return (
        authStore.showModal ? <div
                onClick={(e) => authStore.setShowModal(false)}
                className={styles.root}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={styles.content}
            >
                <div onClick={() => authStore.setShowModal(false)} className={styles.icon}>
                    <XIcon/>
                </div>
                { children }
            </div>
        </div> : null
    );
};

export default observer(Modal);