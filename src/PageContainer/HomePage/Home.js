import React, { useState, useEffect } from 'react';
import { GetHomeData } from '../../api/GetHomeData';
import styles from './Home.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import HomeSection1 from './HomeSection1/HomeSection1';
import HomeSection2 from './HomeSection2/HomeSection2';

const Home = () => {
    const [HomeLoadingComplete, setHomeLoadingComplete] = useState(false);
    const [HomeTitle, setHomeTitle] = useState("");
    const [Section1Images, setSection1Images ] = useState([]);
    const [Section2Data, setSection2Data ] = useState([]);
    const location = useLocation();

    const fetchHome = async () => {  
        setHomeLoadingComplete(false);
        const returnedArray = await GetHomeData();
        console.log('[Home.js] got returnedArray[0].sections[0].images : ', returnedArray[0].sections[0].images);
        console.log('[Home.js] got returnedArray[0].sections[1] : ', returnedArray[0].sections[1]);
        setHomeTitle(returnedArray[0].description || "");
        setSection1Images(returnedArray[0].sections[0].images || [] );
        setSection2Data(returnedArray[0].sections[1]|| [] );
        setHomeLoadingComplete(true);
    };

    useEffect(() => {
        console.log("[Home.js] location.pathname is ", location.pathname);
        fetchHome();
      }, []);


    return (
        <div >
            { !HomeLoadingComplete 
                ?   <div>Loading data ...</div>
                :   <div className={styles.Container}>
                        <p className={styles.title}>{HomeTitle}</p>
                        <div className={styles.sectionPicker}>
                            <div>
                                <NavLink exact to={"/Home/1"} className={styles.link} 
                                        activeStyle={{color: "black"}}>
                                    Section 1
                                </NavLink>
                            </div>
                            <div>
                                <NavLink exact to={"/Home/2"} className={styles.link} 
                                        activeStyle={{color: "black"}}>
                                    Section 2
                                </NavLink>
                            </div>
                        </div>
                        { location.pathname === "/" || location.pathname === "/Home" || location.pathname === "/Home/1"
                          ?
                             <HomeSection1 Section1Images={Section1Images} />
                          : 
                            <HomeSection2 
                                title={Section2Data.title}
                                graphText={Section2Data.graphText}
                                statsArray={Section2Data.stats}
                                formText={Section2Data.formText}
                                formLabels={Section2Data.formLabels}
                                buttonText={Section2Data.buttonText}
                            />
                        }
                    </div>
            }
        </div>
    )
}

export default Home
