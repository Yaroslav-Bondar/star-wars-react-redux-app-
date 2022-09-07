import {NavLink} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import styles from './Favorite.module.css';

const Favorite = () => {
    const favorites = useSelector(store => store.favoriteReducer);
    const lengthFavorites = Object.keys(favorites).length;

    return (
        <div className={styles.container}>
            <NavLink 
                to='/favorites'
                className={`${styles.icon} flag`}
            >
                <span className={styles.counter}>
                    {lengthFavorites}
                </span>
            </NavLink>
        </div>
    );
}

export default Favorite;