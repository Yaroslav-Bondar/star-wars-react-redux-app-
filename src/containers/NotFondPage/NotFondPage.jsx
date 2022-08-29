// import PropTypes from 'prop-types';
import {useLocation} from 'react-router-dom';
import img from './img/not_found.png';
import styles from './NotFondPage.module.css';

const NotFondPage = () => {
    let location = useLocation();
    return (
        <div className={styles['not-found']}>
            <div className={styles['not-found__title']}>Not found</div>
            <img className={styles['not-found__img']} src={img} alt="not_found"/>
            <p className={styles['not-found__txt']}>No match for {location.pathname}</p>
        </div>
    );
}

// NotFondPage.propTypes = {
//     : PropTypes.
// }

export default NotFondPage;