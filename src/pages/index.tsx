import type { NextPage } from 'next'
import Image from "next/image";
import React, {useEffect, useState} from "react";
import MainLayout from 'layouts/MainLayout';
import {BookSvg, ConversationSvg, FlagSvg, MozgSvg, Tourist} from "static/icons/icon";
import hero_img from 'static/images/hero.png'
import styles from 'styles/home.module.scss'

const Index: NextPage = () => {

    return (
              <MainLayout >
                  {/* =------------- HERO SECTION -------------------= */}
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

                  {/* =--------------- ABOUT SECTION -----------------= */}
                  <section className={styles.about}>
                      <div className={styles.about__content}>
                          <div className={styles.about__content_item}>
                              <MozgSvg/>
                          </div>
                          <div className={styles.about__content_item}>
                              <BookSvg/>
                          </div>
                          <div className={styles.about__content_item}>
                              <ConversationSvg/>
                          </div>
                          <div className={styles.about__content_item}>
                              <Tourist/>
                          </div>
                      </div>
                  </section>

                  <h1>Methodology section</h1>
                  <h1>Lessons section</h1>
                  <h1>Traveling section</h1>
                  <h1>What say section</h1>
                  <h1>Lessons 2 section</h1>
              </MainLayout>
  )
}

export default Index
