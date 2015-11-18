import {createStore} from 'redux';
import CONST from '../const/const.js';

var userReducer = function(state=[], action) {
  switch (action.type) {
    case CONST.ACTION_GET_USER:
      console.log('store receive action action get user',action);
      var newStore = [].concat(state,action.user);
      console.log('newStore',newStore);
      return newStore;
    default:
      return state;
  }
};
var store = createStore(userReducer);
export default store;
