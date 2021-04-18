import React,{Component, useState} from 'react'
import {Route,Redirect} from 'react-router-dom'

export default class RouterGuard extends Component{
    state = {
      isLogin: false
    }
    render(){
      const {component:Component,...otherProps} = this.props
      return (
        <Route {...otherProps} render = {props=>(
          this.state.isLogin?<Component {...props}></Component>:
          (<Redirect to={
            {pathname:'./login',state:{form:props.location.pathname}}
          }></Redirect>)        
          )}></Route>
      )
  
    }
  }
