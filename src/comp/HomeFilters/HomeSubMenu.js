import React from 'react'
import {Menu, Select} from "antd"
import RegionSelect from "./CountrySelect"


const HomeSubMenu = ({header, children, ...props})=>{


    return(
        <Menu.SubMenu {...props}>
            <Menu.Item style ={{padding:0 }}>
                <RegionSelect/>
            </Menu.Item>
        </Menu.SubMenu>
    )

}

export default HomeSubMenu