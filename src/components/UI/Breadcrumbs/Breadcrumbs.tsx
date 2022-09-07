import React, {FC, memo} from 'react';
import A from "components/UI/A/A";
import styles from './Breadcrumbs.module.scss'

type Crumb = {
    path: string,
    text: string
}

interface BreadcrumbsProps {
    array: Crumb[],
    current: string
}


const Breadcrumbs: FC<BreadcrumbsProps> = ({ array, current }) => {
    return (
        <div className={styles.breadcrumbs}>
            {
                array.map((guide, i) =>
                    <div className={styles.link} key={i}>
                        <A href={guide.path}>{guide.text}</A>
                        <span className={styles.arrow}>{'>'}</span>
                    </div>
                )
            }
            <div className={styles.current}>{current}</div>
        </div>
    );
};

export default memo(Breadcrumbs);