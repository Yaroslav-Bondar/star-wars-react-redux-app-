import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import UiButton from '../../UI/UiButton';
import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({
    getResource,
    nextPage,
    prevPage,
    counterPage,
}) => {
    console.log('counterPage', counterPage);
    const handleChangeNext = () => {
        getResource(nextPage);
    }
    const handleChangePrev = () => {
        getResource(prevPage);
    }
    return (
        <div className={styles.container}>
            <Link to={`/people/?page=${counterPage - 1}`} className={styles.buttons}>
                <UiButton
                    text = 'Previous'
                    onClick = {handleChangePrev}
                    disabled = {!prevPage}
                />
            </Link>
            <Link to={`/people/?page=${counterPage + 1}`} className={styles.buttons}>
                <UiButton
                    text = 'Next'
                    onClick = {handleChangeNext}
                    disabled = {!nextPage}
                />           
            </Link>
        </div>
    );
}

PeopleNavigation.propTypes = {
    getResource: PropTypes.func,
    nextPage: PropTypes.string,
    prevPage: PropTypes.string,
    counterPage: PropTypes.number,
}

export default PeopleNavigation;