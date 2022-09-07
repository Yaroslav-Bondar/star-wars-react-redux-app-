import {useSelector} from 'react-redux';
import PeopleList from '@components/PeoplePage/PeopleList';
import styles from './FavoritesPage.module.css';

const FavoritesPage = () => {
    const favoritesStore = useSelector(store => store.favoriteReducer);
    const people = Object.entries(favoritesStore).map(([id, {personPhoto: img, personName: name}]) => {
        return {id, name, img}
    });

    return (
        <>
            <h1 className='header__text'>Favorites</h1>
            {people.length ?
                <PeopleList people={people}/> : 
                <h3 className={styles.comment}>No one was added in favorites</h3>
            } 
        </>
    );
}

export default FavoritesPage;