import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container} >
        <div className={styles.content} >
            <h1 className={styles.title}>Hi I'm Makena</h1>
            <p className={styles.description}>I am a developer with 2 years of experience 
                using React and Node js. Reach out if you would 
                like to learn more!</p>
                <a href="mailto:makenavictoria1@gmail.com" className={styles.contactBtn}>Contact Me</a>
        
        </div>
        <img src={getImageUrl("hero/hero.jpeg")}  alt="Hero!" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  );
};
