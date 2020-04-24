import React from 'react';
import {Route,Switch} from "react-router-dom"
import { Layout, Menu, Breadcrumb } from 'antd';
import Home from "./comp/Home"
import About from "./comp/About"
import styles from './App.css';


function App() {
  
  const { Header, Content, Footer, Sider } = Layout;

  return (
    // <div className="App">
      <Layout>
        <Header className="header">
          <div className="logo">
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px'}}>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider 
              breakpoint = "sm"
              collapsedWidth= "0px"
              width="200px"
            >
              <Menu
                mode="inline"
                style={{ height: '100%' }}
              >
              </Menu>
            </Sider>
            <Content style={{ padding: '0 1%', minHeight: "100vh", background:"white", margin:'0 1%' }}>
              Content
              <Switch>
                <Route path="/about" component={About}/>
                <Route path="/" component={Home}/>
              </Switch>
                  
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>

    //  </div>
  );
}

export default App;
