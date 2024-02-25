import React from 'react';
import skills from '../data/skills.json';
import history from '../data/history.json';
import styles from './Experience.module.css';
import { getImageUrl } from '../../utils'

export const Experience = () => {
  return (
    <section className={styles.container} id='experience'>

        <h2 className={styles.title}>Experience</h2>

        <div className={styles.content}>
            <div className={styles.skills}>
                {/*iterate through the skills json*/}
                {skills.map((skill, id) => {
                    return (<div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl(skill.imageSrc)} 
                            alt={skill.title} /></div>
                    </div>
                    );
                })}
            </div>

            <ul className={styles.history}>
                {/*iterate through the history json*/}
                {history.map((historyItem, id)=>{
                    return ( 
                    <li key={id} className={styles.historyItem}>
                        <img src={getImageUrl(historyItem.imageSrc)} 
                        alt={`${historyItem.organisation} Logo`} />
                    <div className={styles.historyItemDetails}>
                        <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                        <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                        <ul>
                            {historyItem.experiences.map((experience , id)=>{
                                return <li key={id}>{experience}</li>;
                            })}
                        </ul>
                    </div>
                    </li>
                );
                })}
            </ul>
        </div>
    </section>
    
  )
}
