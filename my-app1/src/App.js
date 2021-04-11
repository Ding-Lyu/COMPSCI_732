import React, {Component} from 'react'
import {Button} from 'antd'
import {HashRouter,Route,Link} from 'react-router-dom'
import './App.css';
//Import Ant Design layout 
import { Layout, Menu} from 'antd';

//import router components
import Home from './components/home'
import About from './components/about'
import Movie from './components/movie'

const { Header, Content, Footer } = Layout;
// import styles from './css/app.scss'

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
                  <Link to = "/movie">Movie</Link>
                </Menu.Item>
                <Menu.Item key="about" style = {{backgroundColor:'#202020'}}>
                  <Link to = "/about">About</Link>
                </Menu.Item>
                <Button type="link" style={{float:'right',marginTop:'10px',color:'white'}}>Login</Button>
                <Button type="link" style={{float:'right',marginTop:'10px',color:'white'}}>Sign up</Button>
             </Menu>
          </Header>
         <Content style={{ padding: '0 50px',backgroundColor:'white' }}>
           <div className="site-layout-content">
           <Route path = "/home" component = {Home}></Route>
           <Route path = "/about" component = {About}></Route>
           <Route path = "/movie" component = {Movie}></Route>
           </div>
         </Content>
    <Footer style={{ textAlign: 'center' }}>Video streaming interface</Footer>
  </Layout>
);
            </HashRouter>
			)
	}
}