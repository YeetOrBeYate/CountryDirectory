import React from 'react';
import {Route,Switch} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux';
import { Layout, Menu, Button, Input, AutoComplete } from 'antd';
import {FilterOutlined, DownOutlined} from "@ant-design/icons"
import Home from "./comp/Home"
import HomeSubMenu from "./comp/HomeFilters/HomeSubMenu"
import HomeSubSearch from "./comp/HomeFilters/HomeSubSearch"
import About from "./comp/About"
import InfoPage from "./comp/InfoPage"
import "./App.css"


function App(props) {

  
  const Countries = useSelector(state=>state.Countries)
  const { Header, Content, Footer, Sider } = Layout;

  const [HomeFilters,setOpen] = React.useState(true)

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
                style={{ height: '50%'}}
              >
                {HomeFilters && Countries.list?
                  
                  <HomeSubMenu/>
                  
                  :
                  <></>

                }
                {Countries.list?

                  <HomeSubSearch/>
                  :
                  <></>

                }
              </Menu>
            </Sider>
            <Content style={{ padding: '0 1%', minHeight: "90vh", background:"white", margin:'0 1%' }}>
              Content
              <Switch>
                <Route path="/about" render={(props)=> <About {...props} changeOpen={changeOpen}/>}/>
                <Route path="/country/:code" render={(props)=> <InfoPage {...props} changeOpen={changeOpen}/>}/>
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
