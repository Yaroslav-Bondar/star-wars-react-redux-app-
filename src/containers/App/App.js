
import {NavLink, Route, BrowserRouter, Routes} from 'react-router-dom';
// import PeoplePage from '../PeoplePage';
// import HomePage from '../HomePage';
// import logo from './logo.svg';
// import cn from 'classnames';
import Header from '../../components/Header';
import routesConfig from '../../routes/routesConfig';
import styles from './App.module.css';
// import {getApiResource} from '../../utils/network';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header/>
          <Routes>
            {routesConfig.map((route, index) => 
              <Route 
                key = {index}
                path = {route.path} 
                // exact = {route.exact} 
                element = {route.element}
              />    
            )} 
          </Routes>
        </div>
      </BrowserRouter>
    </> 
  );
  // {/* <PeoplePage/> */}
  // {/* <Route path="/" exact element={<HomePage/>}/> */}
  // {/* <Route path="/people" exact element={<PeoplePage/>}/>  */}
}

export default App;


