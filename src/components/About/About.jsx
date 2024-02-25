import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
           
            </div>

        <ul className={styles.aboutItems}>

            <li className={styles.aboutItem}>
                <img src={getImageUrl('about/ui.png')} alt="ui/ux" />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>I am a frontend developer with experience in building 
                        responsive and optimized sites.</p></div>
                    </li>

                    <li className={styles.aboutItem}>
                <img src={getImageUrl('about/server2.png')} alt="server side" />
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>I have experience developing 
                        fast and optimized APIs.</p></div>
                    </li>

                    <li className={styles.aboutItem}>
                <img src={getImageUrl('about/design.png')} alt="design" />
                <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p>I have designed multiple websites and mobile apps using Figma.</p></div>
                    </li>
        </ul>
    </section>
  )
}
