import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

//redux functionality

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";

//reducers

import {CountriesReducer} from "./Reducers/Countries"
import {StatisticsReducer} from "./Reducers/Statistics"
import {ResetReducer} from "./Reducers/Resets"

const rootReducer = combineReducers({
  Countries:CountriesReducer,
  Statistics:StatisticsReducer,
  Reset:ResetReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Router>
    <Provider store = {store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
