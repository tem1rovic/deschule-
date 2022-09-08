import React from 'react';
import {FlagSvg} from "static/icons/icon";
import Image from "next/image";
import hero_img from "static/images/hero.png";
import styles from './home.module.scss'

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__content}>
                <div className={styles.hero__content_info}>
                    <div className={styles.hero__content_info_title}>
                        <h1>Hallo</h1>
                        <h2>Deutsch!</h2>
                    </div>
                    <h2>Курс німецкої мови з гарантією результату!</h2>
                    <FlagSvg/>
                    <p>Вивчай німецьку легко та цікаво з нашою унікальною
                        методикою асоціативного викладення матеріалу.</p>
                    <button>Спробувати безкоштовно!</button>
                </div>
                <div className={styles.hero__content_img}>
                    <Image src={hero_img}
                           alt={"hero"}
                           width={666}
                           height={634}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;