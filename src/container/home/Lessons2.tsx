import React from 'react';
import styles from './home.module.scss'
import Image from "next/image";

const Lessons2 = () => {
    return (
       <section className={styles.lessons2}>
           <div className={styles.lessons2__content}>
               <div className={styles.lessons2__content_img}>
                   <Image
                       width={631}
                       height={536}
                       src={"/images/lessons2.png"}
                       alt="lesson"
                   />
               </div>
               <div className={styles.lessons2__content_info}>
                   <h2>Спробуй просто зараз!</h2>
                   <p>Залиши заявку і ми звяжемось з тобою найближчим часом!</p>
                   <button> Ваше ім’я</button>
                   <button> Номер телефону</button>
                   <button>Розпочати навчання </button>
               </div>
           </div>
       </section>
    );
};

export default Lessons2;