import React from 'react'
import {Menu, Select} from "antd"
import {FilterOutlined, DownOutlined} from "@ant-design/icons"
import RegionSelect from "./RegionSelect"
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
        </Menu.SubMenu>
    )

}

export default HomeSubMenu