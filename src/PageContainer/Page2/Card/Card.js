import React from 'react' ;
import styles from './Card.module.css';

const Card = ({icon, title,body,link }) => {
    return (
        <div className={title === "How we help" ?  styles.blackCard + ' ' + styles.cardContainer : styles.cardContainer } >
            <div className={styles.icon}> 
                <p>{icon}</p>
            </div>
            <div className={styles.cardContent}>
                <div className={styles.title}> 
                    <p><strong>{title}</strong></p>
                </div>
                <div className={styles.body}> 
                    <p>{body}</p>
                </div>
                <div > 
                    <a href="#" className={styles.link}>{link} > </a>
                </div>
            </div>
        </div>
    )
}

export default Card ;
