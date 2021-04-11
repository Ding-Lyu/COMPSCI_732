import React, {Component} from 'react'
import {Button} from 'antd'
import {HashRouter,Route,Link} from 'react-router-dom'
import './App.css';
//Import Ant Design layout 
import { Layout, Menu} from 'antd';

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
          <Header style={{backgroundColor:'#138D75'}}>
            <div className= "logo" />
              <Menu style={{backgroundColor:'#138D75'}} theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">Movie</Menu.Item>
                <Menu.Item key="3">About</Menu.Item>
                <Button type="ghost" style={{float:'right',marginTop:'10px'}}>Login</Button>
                <Button type="ghost" style={{float:'right',marginTop:'10px'}}>Sign up</Button>
             </Menu>
          </Header>
         <Content style={{ padding: '0 50px',backgroundColor:'white' }}>
           <div className="site-layout-content">Content</div>
         </Content>
    <Footer style={{ textAlign: 'center' }}>Video streaming interface</Footer>
  </Layout>
);
            </HashRouter>
			)
	}
}