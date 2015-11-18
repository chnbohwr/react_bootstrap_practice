import React from 'react';
import {Button,ListGroup,ListGroupItem} from 'react-bootstrap';
import {getUserFromHttp,fooBar} from '../action/user_action.js';
import GET from '../utility/ajax.js';
import CONST from '../const/const.js';

export default class Search extends React.Component{
    render(){

      var users = this.props.state;
      console.log('component users',users);
      return (
        <div>
          <Button onClick={this.clickButton.bind(this)}> SearchUser </Button>
          <ListGroup>
            {users.map(function(user){
              return(<ListGroupItem key={user.user.sha1}>{user.user.email}</ListGroupItem>);
            })}
          </ListGroup>
        </div>
      )
    }
    clickButton(){
      const dispatch = this.props.dispatch;
      GET(CONST.USER_URL)
      .then(function(users){
        console.log('get http users', users);
        dispatch(getUserFromHttp(users.results));
      })
    }
}
