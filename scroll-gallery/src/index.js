import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ImagesContextProvider from"./contexts/ImagesContext"


ReactDOM.render(
  <ImagesContextProvider>
    <App />
    </ImagesContextProvider>,
  document.getElementById('root')
);


