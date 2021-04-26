import React, {Component} from 'react'
import {Button} from 'antd'
import {HashRouter,Route,Link,Switch, Redirect} from 'react-router-dom'
import './App.css';
//Import Ant Design layout 
import { Layout, Menu} from 'antd';
//Import router guard
import RouterGuard from './RouterGuard/RouterGuard'

//import router page components
import Home from './components/home'
import About from './components/about'
import Movie from './components/movie'
import NotFound from './components/NotFound'
import RegistDrawerForm from './login_regist/regist'
import LoginMain from './login_regist/loginMain'
import TestMovie from './components/TestMovie'
import Series from './components/Series'
// import LoginDrawerForm from './login_regist/loginMain'
//define antd layout component
const { Header, Content, Footer } = Layout;



export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
	render() {
		return (
      <HashRouter>
	      <Layout className="layout">
          <Header style={{backgroundColor:'#202020'}}>
            <div className= "logo" />
              <Menu style={{backgroundColor:'#202020'}} theme="dark" mode="horizontal" defaultSelectedKeys={[window.location.hash.split('/')[1]]}>
                <Menu.Item key="home" style = {{backgroundColor:'#202020'}}>
                  <Link to = "/home">Home</Link>
                </Menu.Item>
                <Menu.Item key="movie" style = {{backgroundColor:'#202020'}}>
                  <Link to= "/movie">Movie</Link>
                </Menu.Item>
                <Menu.Item key="series" style = {{backgroundColor:'#202020'}}>
                  <Link to= "/series/new/1">Series</Link>
                </Menu.Item>
                <Menu.Item key="about" style = {{backgroundColor:'#202020'}}>
                  <Link to = "/about">About</Link>
                </Menu.Item>
                <Link to = "/login"><Button type="primary" style={{float:'right',marginTop:'10px',color:'white'}}>Login</Button></Link>
                {/* <Button type="link" style={{float:'right',marginTop:'10px',color:'white'}}>Sign up</Button> */}
                {/* <LoginDrawerForm></LoginDrawerForm> */}
                <RegistDrawerForm></RegistDrawerForm>
                {/* <LoginDrawerForm></LoginDrawerForm> */}
             </Menu>
          </Header>
         <Content style={{ padding: '0 50px',backgroundColor:'white',	width:'100%' }}>
           <div className="site-layout-content">
           {/*config router which only match one page by using Switch */}
           <Switch>
           <Route path = "/home" component = {Home}></Route>
           <RouterGuard path = "/about" component = {About}></RouterGuard>
           {/* <Route path = "/about" component = {About}></Route> */}
           <Route path = "/movie" component = {TestMovie}></Route>
           <Route path = "/series" component = {Series}></Route>
           <Route path = "/login" component = {LoginMain}></Route>
           {/* 404page */}
           <Route component = {NotFound}></Route>
           </Switch>
           </div>
         </Content>
    {/* <Footer style={{ textAlign: 'center',backgroundColor:'white' }}>Video streaming interface</Footer> */}
  </Layout>
);
            </HashRouter>
			)
	}
}
