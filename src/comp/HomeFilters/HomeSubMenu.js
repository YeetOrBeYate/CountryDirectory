import React from 'react'
import {Menu} from "antd"
import {FilterOutlined} from "@ant-design/icons"
import RegionSelect from "./RegionSelect"
import TradingSelect from "./TradingSelect"
import "../../App.css"

const HomeSubMenu = ({header, children, ...props})=>{



    return(
        <Menu.SubMenu 
        {...props}
        key='sub1'
        title ={
          <span>
            <FilterOutlined />
            Filters
          </span>
        }
        
        >
            <Menu.Item style ={{padding:0 }}>
              <RegionSelect/>
            </Menu.Item>
            <Menu.Item>
              <TradingSelect/>
            </Menu.Item>
        </Menu.SubMenu>
    )

}

export default HomeSubMenu