import React from 'react'
import {Select} from 'antd'


const RegionSelect = ()=>{


    const {Option} = Select;

    const handle = (value)=>{
        console.log('selected', value)
    }

    return(
        <Select 
        defaultValue={"All Regions"} 
        style={{width:140}} 
        onChange={handle}>
            <Option value={"None"}>All Regions</Option>
            <Option value={'Asia'}>Asia</Option>
            <Option value={'Africa'}>Africa</Option>
            <Option value={'Americas'}>Americas</Option>
            <Option value={'Europe'}>Europe</Option>
            <Option value={'Oceania'}>Oceania</Option>
        </Select>
    )

}

export default RegionSelect