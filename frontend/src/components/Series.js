import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { Link, Route } from "react-router-dom";
import SeriesList from "./SeriesList";

const { Content, Sider } = Layout;

export default class Series extends Component {
  render() {
    return <SeriesList />;
    return (
      <Layout style={{ height: "100%" }}>
        {/* <Sider height = {'100%'} width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                  <Menu.Item style = {{fontSize:'20px'}} key="1"><Link to= "/series/friends/1">Friends</Link></Menu.Item>
                  <Menu.Item key="2"><Link to= "/series/coming/1">2</Link></Menu.Item>
                  <Menu.Item key="3"><Link to= "/series/top/1">3</Link></Menu.Item>
              </Menu>
            </Sider> */}
        {/* <Layout style={{ padding: "0 24px 24px", backgroundColor: "white" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: "100%",
              backgroundColor: "white",
            }}
          >
            <Route path="/series/:type/:page" component={SeriesList}></Route>
            
          </Content>
        </Layout> */}
      </Layout>
    );
  }
}
