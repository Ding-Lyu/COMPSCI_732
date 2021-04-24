import React, { Component } from 'react';
import Login from './Login'
import imgURL from '../img/logo.png';


export default class LoginMain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login-home">
        <img style = {{width : '50%'}} src={imgURL} />
        <Login></Login>
      </div>
    );
  }
}

