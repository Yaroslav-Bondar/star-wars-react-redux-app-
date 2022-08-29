import HomePage from '../containers/HomePage';
import PeoplePage from '../containers/PeoplePage';
import PersonPage from '../containers/PersonPage';
import NotFondPage from '../containers/NotFondPage'

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
    }

]
export {routesConfig as default};