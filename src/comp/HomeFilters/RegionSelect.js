import React from 'react'
import {Select} from 'antd'
import {useDispatch, useSelector} from 'react-redux';
import {FilterCountries, LoadCountries} from "../../Actions/CountriesActions"
import "../../App.css"


const RegionSelect = ()=>{

    const dispatch = useDispatch()
    const Countries = useSelector(state=>state.Countries)

    const {Option} = Select;
    const [region, setRegion] = React.useState({
        Asia:'Asia',
        Europe:'Europe',
        Africa:'Africa',
        Americas:'Americas',
        Polar:'Polar',
        Oceania:'Oceania',
        None:'None'
    })

    const handle = (value)=>{
        if(value === "None"){
            dispatch(LoadCountries())
        }else{
            dispatch(FilterCountries(value))
        }
    }

    return(
        <Select 
        defaultValue={"All Regions"} 
        style={{width:140}} 
        onChange={handle}>
            <Option value={region.None}>All Regions</Option>
            <Option value={region.Asia}>Asia</Option>
            <Option value={region.Africa}>Africa</Option>
            <Option value={region.Americas}>Americas</Option>
            <Option value={region.Europe}>Europe</Option>
            <Option value={region.Oceania}>Oceania</Option>
            <Option value={region.Polar}>Polar</Option>
        </Select>
    )

}

export default RegionSelect