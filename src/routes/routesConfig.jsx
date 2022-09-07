import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage';
import NotFondPage from '@containers/NotFondPage';
import FavoritesPage from '@containers/FavoritesPage';

export const routesConfig = [
    {
        path: '/',
        element: <HomePage/>,
    },
    {
        path: '/people',
        element: <PeoplePage/>,
    },
    {
        path: '/people/:id',
        element: <PersonPage/>,
    },
    {
        path: '/not-found',
        element: <NotFondPage/>,
    },
    {
        path: '*',
        element: <NotFondPage/>,
    },
    {
        path: '/favorites',
        element: <FavoritesPage/>,
    }
]
export {routesConfig as default};