import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Menu, AutoComplete, Input} from "antd"
import {SearchOutlined} from "@ant-design/icons"
import {FilterOutlined, DownOutlined} from "@ant-design/icons"
import RegionSelect from "./RegionSelect"
import TradingSelect from "./TradingSelect"
import "../../App.css"

const HomeSubSearch = ({header, children, ...props})=>{

    const Countries = useSelector(state=>state.Countries)
    const [options, setOptions] =React.useState([
        {value:"Yeet"},
        {value:"Yate"},
        {value:'Or'}
    ])


    const autoSelect = (value, option)=>{
        console.log("autoSelect-value", value)
        console.log("autoSelect-option", option)
    }

    const autoSearch = (value)=>{
        console.log('AutoSearch', value)
    }

    const inputSearch = (value, event)=>{
        console.log('inputSearch', value)
    }

    return(
        <Menu.SubMenu
            {...props}
            key="sub2"
            title = {
                <span>
                    <SearchOutlined />
                    Search
                </span>
            }
        >
            <Menu.Item style = {{height:60}}>
                <AutoComplete
                    dropdownMatchSelectWidth={230}
                    style={{width:230}}
                    options={options}
                    onSelect={autoSelect}
                    onSearch={autoSearch}
                    filterOption={(inputValue,option)=>option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                >
                    <Input.Search
                    placeholder="Country name"
                    enterButton="Search"
                    size="large"
                    onSearch={inputSearch}
                    >
                    </Input.Search>
                </AutoComplete>
            </Menu.Item>
        </Menu.SubMenu>
    )

}

export default HomeSubSearch
