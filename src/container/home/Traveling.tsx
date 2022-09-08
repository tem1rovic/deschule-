import React from 'react';
import {FlagSvg} from "static/icons/icon";
import Image from "next/image";
import styles from "./home.module.scss";

const Traveling = () => {
    return (
        <section className={styles.traveling}>
            <div className={styles.traveling__content}>
                <div className={styles.traveling__content_info}>
                    <h2>Вивчай німецьку подорожуючи!</h2>
                    <FlagSvg/>
                    <div>
                        <span>5</span>
                        <h3>країн</h3>
                    </div>
                    <p>Протягом повноціного та поетапного курсу ви не тільки познайомишся з улюбленими героями та навіть відвідаєте 5 німецькомовних країн. Навчання з нами дає можливість подорожувати по них, як Баррі Аллен ( серіал Флеш). Сьогодні ви в Ліхтенштейні(А1), а завтра в Німеччині(С1). </p>
                </div>
                <div className={styles.traveling__content_location}>
                    <Image
                        width={703}
                        height={721}
                        src={"/images/map.png"}
                        alt="about"
                    />
                </div>
            </div>
        </section>
    );
};

export default Traveling;