import { Button } from 'react-bootstrap';
import React from 'react';
import ReactDom from 'react-dom';
import APP from './container/app_search.js';
import {Provider} from 'react-redux';
import store from './store/user_store.js';
ReactDom.render(
  <Provider store={store}>
    <APP/>
  </Provider>
  ,document.getElementById('app'));
