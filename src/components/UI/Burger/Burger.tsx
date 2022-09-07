import React, {FC, memo, useCallback} from 'react';
import styles from './Burger.module.scss'

interface BurgerProps {
    show: boolean,
    setShow: (show: boolean) => void
}

const Burger: FC<BurgerProps> = ({ show, setShow }) => {

    const handleToggle = useCallback(() => {
        setShow(!show)
    }, [show, setShow])

    return (
        <button
            onClick={handleToggle}
            className={`${show ? styles.showMobileMenu : styles.button} hamburger hamburger--squeeze ${show ? 'is-active' : ''}`}
            type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
        </button>
    );
};

export default memo(Burger);