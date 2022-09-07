import React, {FC, memo} from 'react';
import Logo from "components/UI/Logo/Logo";
import A from "components/UI/A/A";
import {Arrow} from "static/icons/icon";
import styles from './Header.module.scss'


const Header: FC = () => {

    return (
            <header className={styles.header}>
               <Logo />
                <div className={styles.navbar} >
                    <ul>
                        <li>
                            <A href={'/project'}>Про проект</A>
                        </li>
                        <li>
                            <A href={'/project'}>Курси</A>
                        </li>
                        <li>
                            <A href={'/project'}>Відгуки</A>
                        </li>
                    </ul>
                </div>
                <button>Почати навчання</button>
                <div>UA <Arrow/> </div>
            </header>
    );
};


Header.displayName = 'Header'

export default memo(Header);