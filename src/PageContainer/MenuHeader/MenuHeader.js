import React, { useState, useEffect } from 'react';
import styles from './MenuHeader.module.css';
import { Link, useLocation, NavLink  } from 'react-router-dom';
import { GetMenu } from '../../api/GetMenu';

const MenuHeader = () => {
    const [MenuLoading, setMenuLoading] = useState(false);
    const [MenuTitles, setMenuTitles] = useState([]);
    //sconst location = useLocation();

    const fetchMenu = async () => {
        setMenuLoading(true);
        const returnedArray = await GetMenu();
        console.log('MenuHeader got returnedArray : ', returnedArray);
        setMenuTitles(returnedArray || []);
        setMenuLoading(false);
      };

    const MenuLinks = () => {
        return (
             MenuTitles.map( (element, index) => 
             {
               const goTo = `/${element.title}`;
               return (
                    <NavLink exact  to={goTo} className={styles.link} key={index} activeStyle={{
                        fontWeight: "bold",
                        color: "white"
                    }}>
                        {element.title}
                    </NavLink>
                )
            })
        )
    }


    useEffect(() => {
        fetchMenu();
      }, []);

    return (
        <div className={styles.MenuHeader}>
            <div>
                { MenuLoading ?
                   <div className={styles.AlignCenter}>Loading data ...</div>
                   : 
                    <div>
                        <MenuLinks />
                        <p>Search</p>
                    </div>
                }
            </div>
            <p>This is Menu Header</p>
            {/* { location.pathname === '/' ?
              <div>
                  <p>we are in home</p>
              </div>
              : 
              <div>
                    <p>we are in page2</p>
                </div>
            } */}
                    {/* if (loading) {
                        return <div className={styles.AlignCenter}>Loading data ...</div>;
                    } */}
        </div>
    )
}

export default MenuHeader ;
