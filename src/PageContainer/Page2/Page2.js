import React, { useState, useEffect } from 'react';
import styles from './Page2.module.css';
import { GetPage2Data } from '../../api/GetPage2Data';
import Card from './Card/Card';


const Page2 = () => {
    const [Page2LoadingComplete, setPage2LoadingComplete] = useState(false);
    const [Tile, setTile] = useState("");
    const [CardData, setCardData] = useState([]);

    const fetchPage2 = async () => {  
        setPage2LoadingComplete(false);
        const returnedArray = await GetPage2Data();
        console.log('Page2 got returnedArray : ', returnedArray[0]);
        setTile(returnedArray[0].description || "")
        setCardData(returnedArray[0].tiles || []);
        setPage2LoadingComplete(true);
    };
    
    const CardContrainer = () => {
        return (
            CardData.map( (element, index) => 
            (   <div >
                    <Card 
                        key = {index}
                        icon = {element.icon}
                        title={element.title}
                        body = {element.description}
                        link = {element.link}
                    /> 
                </div>
           ))
        )
    }
    
    useEffect(() => {
        fetchPage2();
      }, []);


    return (
        <div className={styles.Container}>
            { !Page2LoadingComplete 
                ?   <div>Loading data ...</div>
                :   <div>
                        <p  className={styles.title}>{Tile}</p>
                        <div  className={styles.Cards}>
                            <CardContrainer />
                        </div>
                    </div>
            }
        </div>
    )
}

export default Page2 ;
