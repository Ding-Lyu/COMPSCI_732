import React,{Component} from 'react'
import { Layout, Menu } from 'antd';
import {Link, Route} from 'react-router-dom'
import MovieList from './moveList'
import TestMovie from './TestMovie'


const { Content, Sider } = Layout;

export default class Movie extends Component{
    render(){
        return(
            <Layout style = {{height :'100%'}}>
            <Sider height = {'100%'} width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                  <Menu.Item key="1"><Link to= "/movie/new/1">1</Link></Menu.Item>
                  <Menu.Item key="2"><Link to= "/movie/coming/1">2</Link></Menu.Item>
                  <Menu.Item key="3"><Link to= "/movie/top/1">3</Link></Menu.Item>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px',backgroundColor:'white' }}>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: '100%',
                  backgroundColor: 'white'
                }}
              >
              <Route path = "/movie/:type/:page" component = {MovieList}></Route>
              {/* <Route  component = {TestMovie}></Route> */}
              </Content>
            </Layout>
          </Layout>
        )
    }

}