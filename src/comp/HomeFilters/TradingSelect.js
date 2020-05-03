import React from 'react'
import {Select} from 'antd'
import {useDispatch} from 'react-redux';
import {FilterBlocs,LoadCountries} from "../../Actions/CountriesActions"
import {resetPage} from "../../Actions/ResetActions"
import "../../App.css"

const TradingSelect = ()=>{

    const dispatch = useDispatch()

    const {Option, OptGroup} = Select

    const handle = (value)=>{

        if(value === "None"){
            dispatch(LoadCountries())
            dispatch(resetPage())
        }else{
            dispatch(FilterBlocs(value))
            dispatch(resetPage())
        }

    }


    return(

        <Select
            defaultValue={"All Trading Blocs"}
            style={{width:180}}
            onChange={handle}
        >
            <Option value="None">All Trading Blocs</Option>
            <OptGroup label="Asia">
                <Option value="EEU">EEU</Option>
                <Option value="SAARC">SAARC</Option>
            </OptGroup>
            <OptGroup label="Africa">
                <Option value="AU">AU</Option>
            </OptGroup>
            <OptGroup label="Americas">
                <Option value="CARICOM">CARICOM</Option>
                <Option value="PA">PA</Option>
                <Option value="USAN">USAN</Option>
                <Option value="CAIS">CAIS</Option>
                <Option value="NAFTA">NAFTA</Option>
            </OptGroup>
            <OptGroup label="Europe">
                <Option value="EU">EU</Option>
                <Option value="EFTA">EFTA</Option>
                <Option value="CEFTA">CEFTA</Option>
            </OptGroup>
            <OptGroup label="Oceania">
                <Option value="ASEAN">ASEAN</Option>
            </OptGroup>


        </Select>

    )

}

export default TradingSelect