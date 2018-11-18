import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import calculatorReducer from './store/reducers/calculator';
import { rootSaga } from './store/sagas/calculator';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(calculatorReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
