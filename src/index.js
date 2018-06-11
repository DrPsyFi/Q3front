import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import 'bootswatch/dist/materia/bootstrap.min.css'
import './index.css';

const storeInstance = store();

ReactDOM.render(
  <Provider store={storeInstance}>
   <App />
 </Provider>,
  document.getElementById('root')
);
