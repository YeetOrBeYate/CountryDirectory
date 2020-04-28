import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Menu, AutoComplete, Input, Button} from "antd"
import {Redirect} from "react-router-dom"
import {SearchOutlined} from "@ant-design/icons"
import {FilterOutlined, DownOutlined} from "@ant-design/icons"
import RegionSelect from "./RegionSelect"
import TradingSelect from "./TradingSelect"
import "../../App.css"

const HomeSubSearch = ({header, children, ...props})=>{

  

    const Countries = useSelector(state=>state.Countries)
    const [options, setOptions] =React.useState(null)
    const [redirect, setRedirect] = React.useState(false)

    const loadOptions = ()=>{
        if(Countries.list && !options){
            const arraylist = []
            Countries.list.forEach(place=>{
                let newoption = {value:place.name, code:place.alpha3Code}
                arraylist.push(newoption)
            })
            setOptions(arraylist)
        }
    }



    const autoSelect = (value, option)=>{
        setRedirect(false)
        console.log("autoSelect-option", option)
        setRedirect(true)
    }

    const autoSearch = (value)=>{
        setRedirect(false)
        console.log('AutoSearch', value)
    }

    const inputSearch = (value, event)=>{
        setRedirect(false)
        console.log('inputSearch', value)
        // setRedirect(true)
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
                    filterOption={(inputValue,options)=>options.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                >
                    <Input.Search
                    placeholder="Country name"
                    enterButton="Search"
                    size="large"
                    onSearch={inputSearch}
                    >
                        {loadOptions()}
                    </Input.Search>
                </AutoComplete>
            </Menu.Item>
            {redirect?
                <Redirect push to="/about"/>
                :
                <></>
            }
        </Menu.SubMenu>
    )

}

export default HomeSubSearch
