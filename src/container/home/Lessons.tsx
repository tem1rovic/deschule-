import React from 'react';
import styles from "./home.module.scss";
import {FlagSvg} from "static/icons/icon";

const Lessons = () => {
    return (
        <section className={styles.lessons}>
            <div className={styles.lessons__content}>
                <div className={styles.lessons__content_img}>
                    <span>5</span>
                    <h3>перших уроків <span>безкоштовно!</span></h3>
                </div>
                <div className={styles.lessons__content_info}>
                    <h2>Спробуй просто зараз!</h2>
                    <FlagSvg/>
                    <p>З  унікальною пропозицією на 5 безкоштовних занять  ти зможеш познайомитись з нашою школою, подивитись, як проходять заняття і зрозуміти як працює наша методика.</p>
                </div>
            </div>
            <div className={styles.lessons__content_btns}>
                <button>Ваше ім’я</button>
                <button>Номер телефону</button>
                <button>Розпочати навчання</button>
            </div>
        </section>
    );
};

export default Lessons;