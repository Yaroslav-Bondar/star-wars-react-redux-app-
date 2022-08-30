import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {changeHTTP, makeConcurrentRequest} from '@utils/network';
import styles from './PersonFilms.module.css';

const PersonFilms = ({films}) => {
    const [filmsName, setFilmsName] = useState([]);

    useEffect(() => {
        (async () => {
            const filmsHTTPS = films.map(url => changeHTTP(url));
            const response = await makeConcurrentRequest(filmsHTTPS);
            // sort ascending by movie episode id
            response.sort((a, b) => a.episode_id - b.episode_id);
            setFilmsName(response);
        })();
    }, []);

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {filmsName.map(({title, episode_id}) => 
                    <li className={styles.list__item} key={episode_id}>
                        <span className={styles.item__episode}>Episode {episode_id}</span> 
                        <span className={styles.item__separator}> : </span> 
                        <span className={styles.item__title}>{title}</span>
                    </li>)}
            </ul>
        </div>    
    )
}

PersonFilms.propTypes = {
    films: PropTypes.array,
}

export default PersonFilms;