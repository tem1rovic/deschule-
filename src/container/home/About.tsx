import React from 'react';
import Image from "next/image";
import styles from "./home.module.scss";

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.about__content}>
                <div className={styles.about__content_item}>
                    <Image
                        width={193}
                        height={193}
                        src={"/images/amnesia.png"}
                        alt="about"
                    />
                    <div><span>Тренуй </span>пам’ять</div>
                </div>
                <div className={styles.about__content_item}>
                    <Image
                        width={154}
                        height={154}
                        src={"/images/books.png"}
                        alt="about"
                    />
                    <div><span>Читай </span> літературу</div>
                </div>
                <div className={styles.about__content_item}>
                    <Image
                        width={174}
                        height={174}
                        src={"/images/conversation.png"}
                        alt="about"
                    />
                    <div><span>Розвивай  </span>впевненість</div>
                </div>
                <div className={styles.about__content_item}>
                    <Image
                        width={161}
                        height={161}
                        src={"/images/tourist.png"}
                        alt="about"
                    />
                    <div><span>Подорожуй </span></div>
                </div>
            </div>
        </section>
    );
};

export default About;