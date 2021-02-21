import React from 'react';
import styles from './HomeSection1.module.css';

const HomeSection1 = ({Section1Images}) => {
    return (
        <div >
            <div className={styles.flexGrid}>
                <div className={styles.col1}>
                    <div className={styles.data} >
                        <img src={Section1Images[0].img} alt={Section1Images[0].title} />
                    </div>
                </div>
                <div className={styles.col2}>
                    <div className={styles.row}>
                        <div className={styles.data} >
                            <img src={Section1Images[1].img} alt={Section1Images[1].title} />
                        </div>  
                        <div className={styles.data}>
                            <img src={Section1Images[2].img} alt={Section1Images[2].title} />
                        </div>
                    </div>
                    <div className={styles.row}>                        
                        <div className={styles.data}>
                            <img src={Section1Images[3].img} alt={Section1Images[3].title} />
                        </div>  
                        <div className={styles.data}>
                            <img src={Section1Images[4].img} alt={Section1Images[4].title} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeSection1 ;
