import React from 'react';
import styles from './Contact.module.css';
import {getImageUrl} from '../../utils';

export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/email.png')}
                 alt="email icon" />
                 <a href="mailto:makenavictoria1@gmail.com">makenavictoria1@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedin.png')}
                 alt="email icon" />
                 <a href="https://www.linkedin.com/in/victoria-makena-478a411b5/">LinkedIn.com/Victoria-Makena</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/github.png')}
                 alt="email icon" />
                 <a href="https://github.com/tori-bot">Github.com/tori-bot</a>
            </li>
        </ul>
    </footer>
  )
}
