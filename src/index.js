import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './styles/index.css';

// import reportWebVitals from './reportWebVitals';

// {/* <PeoplePage /> */}
ReactDOM.render(
  <React.StrictMode>
    <App />
    <h1 className="header">Hello</h1>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
