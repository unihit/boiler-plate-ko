import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import { applyMiddleware, createStore } from 'redux';
import promisMiddleware from 'redux-promise';
import ReduxThunk from 'redux=thunk';
import Reducer from './_reducers';


const createStoreWithMiddleware = applyMiddleware(promisMiddleware, ReduxThunk) (createStore)


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();