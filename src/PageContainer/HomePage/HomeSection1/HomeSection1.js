import React, { useState, useEffect } from 'react';
import styles from './HomeSection1.module.css';

const HomeSection1 = ({Section1Images}) => {

    useEffect(() => {
        console.log("[HomeSection1.js] Section1Images is ", Section1Images);
        console.log("[HomeSection1.js] Section1Images[0].img is ", Section1Images[0].img);
      }, []);


                  {/* {Section1Images.images.map( (element, index) => 
                (   <div key={index} >
                        <p> {element.img}</p> 
                        <p> {element.title}</p>  
                    </div>
            ))
            }  */}


    return (
        <div >
            <p> HomeSection1</p>

            <div className={styles.flexGrid}>
                <div className={styles.col}>
                    <div className={styles.data}>
                        {/* <img src={Section1Images[0].img} alt={Section1Images[0].title} />  */}
                        <p>1 {Section1Images[0].title} </p>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.data}>
                        <p>2 {Section1Images[1].title} </p>
                    </div>  
                    <div className={styles.data}>
                        <p>4 {Section1Images[3].title} </p>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.data}>
                        <p>3 {Section1Images[2].title} </p>
                    </div>  
                    <div className={styles.data}>
                         <p>5 {Section1Images[4].title} </p>
                    </div>
                </div>
            </div>
            {/* <div className={styles.flexGrid}>
                <div className={styles.col}> 4 </div>
                <div className={styles.col}> 5 </div>
                <div className={styles.col}> 6 </div>
            </div> */}
        </div>
    )
}

export default HomeSection1 ;
