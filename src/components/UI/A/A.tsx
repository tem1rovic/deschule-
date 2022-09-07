import React, {FC, memo, ReactNode} from 'react';
import Link from "next/link";
import styles from './A.module.scss'

interface AProps {
    href: string,
    children: ReactNode,
    isBtn?: boolean
}

const A: FC<AProps> = ({ href, children , isBtn = false }) => {
    return (
        <Link href={href}>
            <a  className={isBtn ? styles.link : ''}>{children}</a>
        </Link>
    );
};

export default memo(A);