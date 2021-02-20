import React, { useState, useEffect } from 'react';
import { GetHomeData } from '../../api/GetHomeData';
import styles from './Home.module.css';

const Home = () => {
    const [HomeLoading, setHomeLoading] = useState(false);
    const [HomeTitle, setHomeTitle] = useState("");
    const [Section1Images, setSection1Images ] = useState([]);
    const [Section2Data, setSection2Data ] = useState([]);

    const fetchHome = async () => {  
        setHomeLoading(true);
        const returnedArray = await GetHomeData();
        console.log('Home got returnedArray[0].sections[0] : ', returnedArray[0].sections[0].images);
        console.log('Home got returnedArray[0].sections[0] : ', returnedArray[0].sections[1]);
        setHomeTitle(returnedArray[0].description || "");
        setSection1Images(returnedArray[0].sections[0]|| [] );
        setSection2Data(returnedArray[0].sections[1]|| [] );
        setHomeLoading(false);
    };

    useEffect(() => {
        fetchHome();
      }, []);


    return (
        <div >
            { HomeLoading 
                ?   <div>Loading data ...</div>
                :   <div className={styles.Container}>
                        <p className={styles.title}>{HomeTitle}</p>
                        <div className={styles.sectionPicker}>
                            <div>
                                Section 1
                            </div>
                            <div>
                                 Section 2
                            </div>
                        </div>
                        <p> images go here</p>
                    </div>
            }
        </div>
    )
}

export default Home
