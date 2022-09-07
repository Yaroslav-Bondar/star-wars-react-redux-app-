import {createStore} from 'redux';
import {setLocalStorage} from '@utils/localStorage';
import rootReducer from '@store/reducers';
import {LOCAL_STORAGE_FAVORITES_KEY} from '@constants/localStorage';

const store = createStore(rootReducer);

store.subscribe(() => {
    setLocalStorage(LOCAL_STORAGE_FAVORITES_KEY, store.getState().favoriteReducer);
});

export default store;