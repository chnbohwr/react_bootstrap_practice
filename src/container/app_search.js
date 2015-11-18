import React from 'react';
import {connect} from 'react-redux';
import SearchComponent from '../component/mainpage.js';
import store from '../store/user_store.js';

function select(state){
  return {state}
}
export default connect(select)(SearchComponent);
