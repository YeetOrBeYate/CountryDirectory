import React from 'react';
import {Route,Switch} from "react-router-dom"
import { Layout, Menu, Dropdown, Button } from 'antd';
import {FilterOutlined, DownOutlined} from "@ant-design/icons"
import Home from "./comp/Home"
import HomeSubMenu from "./comp/HomeFilters/HomeSubMenu"
import About from "./comp/About"
import "./App.css"


function App() {
  
  const {SubMenu} = Menu;
  const { Header, Content, Footer, Sider } = Layout;

  const[open,setOpen] = React.useState(true)

  const changeOpen = (yeet)=>{
    setOpen(yeet)
  }


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
        <Content style={{}}>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider 
              breakpoint = "sm"
              collapsedWidth= "0px"
              width="300px"
            >
              <Menu
                mode="inline"
                style={{ height: '100%'}}
              >
                {open?

                  <HomeSubMenu/>
                  :
                  <></>

                }
              </Menu>
            </Sider>
            <Content style={{ padding: '0 1%', minHeight: "90vh", background:"white", margin:'0 1%' }}>
              Content
              <Switch>
                <Route path="/about" component={About}/>
                <Route path="/" render={(props)=> <Home {...props} changeOpen={changeOpen}/>}/>
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
