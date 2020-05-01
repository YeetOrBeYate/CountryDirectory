import React from 'react';
import {Route,Switch, Link} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux';
import { Layout, Menu, Button, Input, AutoComplete } from 'antd';
import {AntDesignOutlined} from "@ant-design/icons"
import Home from "./comp/Home"
import HomeSubMenu from "./comp/HomeFilters/HomeSubMenu"
import InfoSubmenu from "./comp/InfoFilters/InfoSubmenu"
import HomeSubSearch from "./comp/HomeFilters/HomeSubSearch"
import About from "./comp/About"
import InfoPage from "./comp/InfoPage"
import "./App.css"
import InfoSubMenu from './comp/InfoFilters/InfoSubmenu';




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
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
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

                {
                  !HomeFilters && Countries.single && Countries.list?

                  <InfoSubMenu/>
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
            <Content style={{ padding: '0 1%', minHeight: "80vh", background:"white", margin:'0 1%' }}>
              
              <Switch>
                <Route path="/about" render={(props)=> <About {...props} changeOpen={changeOpen}/>}/>
                <Route path="/country/:code" render={(props)=> <InfoPage {...props} changeOpen={changeOpen}/>}/>
                <Route path="/" render={(props)=> <Home {...props} changeOpen={changeOpen}/>}/>
              </Switch>
                  
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Kyle Corbin 2020: Ant Design <AntDesignOutlined />
          <div>
            <a target="_blank" href="https://icons8.com">Icons8</a>
          </div>
        </Footer>
      </Layout>

    //  </div>
  );
}

export default App;
