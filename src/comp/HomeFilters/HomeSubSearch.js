import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Menu, AutoComplete, Input, Button} from "antd"
import {Redirect} from "react-router-dom"
import {SearchOutlined} from "@ant-design/icons"
import "../../App.css"

const HomeSubSearch = ({header, children, ...props})=>{

  

    const Countries = useSelector(state=>state.Countries)
    const [options, setOptions] =React.useState(null)
    const [redirect, setRedirect] = React.useState(false)
    const [code,setCode] = React.useState('')

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
        setCode(option.code)
        setRedirect(true)
    }

    //this one controls typing no matter what. If you type, you prime the redirect 
    const autoSearch = (value)=>{
        setRedirect(false)
    }

    const inputSearch = (value, event)=>{
        let option = options.find((option=>{return option.value.toUpperCase()===value.toUpperCase() }))
        setCode(option.code)
        setRedirect(true)
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
                <Redirect push to={`/country/${code}`}/>
                :
                <></>
            }
        </Menu.SubMenu>
    )

}

export default HomeSubSearch
