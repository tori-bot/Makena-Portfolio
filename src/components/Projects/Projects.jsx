import React from 'react';
import { useState,useEffect } from 'react';
import styles from './Projects.module.css';

export const Projects = () => {
    
    const [repos,setRepos]=useState([])
    const [users]=useState('tori-bot')

    function GithubRepos(){    
        useEffect(()=>{
            fetch(`https://api.github.com/users/${users}/repos?page=1&per_page=12&sort=updated`)
            .then((response)=>(response.json()))
            .then((data)=>{
                setRepos(data)
            })
        },[])
    }

    GithubRepos()

  return (

    <section className={styles.container}>
        {!repos ? 
        <h2>Loading repos </h2> :(
            <div>
                <h2 className={styles.heading} id='projects'>{users}'s Github Projects </h2>
                <div className={styles.content}>
                    {repos.map((repo)=>(
                        <div className={styles.cardi} key={repo.id}>
                            <h3 className={styles.title}>{repo.name}</h3>
                            <p className={styles.text}>{repo.description}</p>
                            <a className={styles.link} href={repo.html_url}>View on Github</a>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </section>
  )
}
