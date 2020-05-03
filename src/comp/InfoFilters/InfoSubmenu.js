import React from 'react'
import {Menu} from "antd"
import {GlobalOutlined} from "@ant-design/icons"
import BordersSelect from "./BordersSelect"
import "../../App.css"

const InfoSubMenu = ({header, children, ...props})=>{

    return(
        <Menu.SubMenu 
        {...props}
        key='sub1'
        title ={
          <span>
            <GlobalOutlined />
            Borders
          </span>
        }
        
        >
            <Menu.Item style ={{padding:0 }}>
              <BordersSelect/>
            </Menu.Item>
        </Menu.SubMenu>
    )

}

export default InfoSubMenu