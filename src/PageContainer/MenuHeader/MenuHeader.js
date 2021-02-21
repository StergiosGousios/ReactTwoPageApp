import React, { useState, useEffect } from 'react';
import styles from './MenuHeader.module.css';
import { Link, useLocation, NavLink  } from 'react-router-dom';
import { GetMenu } from '../../api/GetMenu';

const MenuHeader = () => {
    const [MenuLoading, setMenuLoading] = useState(false);
    const [MenuTitles, setMenuTitles] = useState([]);

    const fetchMenu = async () => {
        setMenuLoading(true);
        const returnedArray = await GetMenu();
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
                    </div>
                }
            </div>
        </div>
    )
}

export default MenuHeader ;
