import React, {FC, memo, useEffect, useState} from 'react';
import Logo from "components/UI/Logo/Logo";
import A from "components/UI/A/A";
import {Arrow} from "static/icons/icon";
import styles from './Header.module.scss';
import NavLink from "components/UI/NavLink";

const Header: FC = () => {
    const [ scroll, setScroll ] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 0) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        })
    }, [ ])

    return (
            <header
                className={styles.header}
                style={ { borderBottom: scroll ? '1px solid rgba(110, 109, 119, 0.2)' : '1px solid transparent' }}
            >
               <div className={styles.content}>
                   <Logo />
                   <div className={styles.navbar} >
                       <ul>
                           <li>
                               <NavLink exact={true} href={'/'}>Про проект</NavLink>
                           </li>
                           <li>
                               <NavLink exact={true} href={'/course'}>Курси</NavLink>
                           </li>
                           <li>
                               <NavLink exact={true} href={'/reviews'}>Відгуки</NavLink>
                           </li>
                       </ul>
                   </div>
                   <button>Почати навчання</button>
                   <div>UA <Arrow/> </div>
               </div>
            </header>
    );
};


Header.displayName = 'Header'

export default memo(Header);