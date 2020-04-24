import React from 'react'
import {Menu, Select} from "antd"
import {FilterOutlined, DownOutlined} from "@ant-design/icons"


const HomeSubMenu = ({header, children, ...props})=>{

    const {Option} = Select;

    const handle = (value)=>{
        console.log('selected', value)
    }

    return(
        <Menu.SubMenu
            {...props}
        >
            <Menu.Item>
                <Select defaultValue={"All"} style={{width:120}} onChange={handle}>
                    <Option value={"None"}>All</Option>
                    <Option value={'Asia'}>Asia</Option>
                    <Option value={'Africa'}>Africa</Option>
                    <Option value={'Americas'}>Americas</Option>
                    <Option value={'Europe'}>Europe</Option>
                    <Option value={'Oceania'}>Oceania</Option>
                </Select>
            </Menu.Item>
        </Menu.SubMenu>
    )

}

export default HomeSubMenu