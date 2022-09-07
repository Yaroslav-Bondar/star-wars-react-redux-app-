import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import {setPersonToFavorite, removePersonFromFavorite} from '@store/actions';
import styles from './PersonPhoto.module.css';

const PersonPhoto = ({personId, 
                        personPhoto, 
                        personName,
                        isFavorite,
                        setIsFavorite,
                    }) => {
    
    const dispatch = useDispatch();
    const dispatchFavoritePerson = () => {
        if(isFavorite) {
            dispatch(removePersonFromFavorite(personId)); 
            setIsFavorite(false);
        } else {
            dispatch(setPersonToFavorite({[personId]: {personPhoto, personName}})); 
            setIsFavorite(true); 
        }
    }
    
    const st = classNames.bind(styles);
    const iconClasses = st({
        'icon': true,
        'icon_active': isFavorite,
        'points-star5': true,
    });

    return (
        <div className={styles.container}>
            <img className={styles.photo} src={personPhoto} alt={personName}/>
            <button className={iconClasses} onClick={dispatchFavoritePerson}></button>
        </div>
    );
}

PersonPhoto.propTypes = {
    personId: PropTypes.string,
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    isFavorite: PropTypes.bool,
    setIsFavorite: PropTypes.func,
}

export default PersonPhoto;