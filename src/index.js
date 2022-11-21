import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducers from './store/reducers';
import sagas from './store/saga';
import './assets/styles/style.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';
import './assets/styles/css/bootstrap.min.css';
import './slick/slick.css';
import './slick/slick-theme.css';
import './assets/styles/css/datepicker.css';
import './assets/styles/css/tooplate-style.css';

const saga = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(saga, thunk),
);
saga.run(sagas);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
