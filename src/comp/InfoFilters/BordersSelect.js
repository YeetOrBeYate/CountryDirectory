import React from "react"
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom"
import { Select } from 'antd';


const BordersSelect = (props)=>{

    

    const { Option } = Select;
    const Countries = useSelector(state=>state.Countries)


    const handle = (value)=>{

        console.log(value)
    }

    return(
        <Select
            defaultValue = "Bordering Countries"
            onSelect = {handle} 
            style={{width:"180px"}}       
        >
                <Option value="Bordering Countries">Bordering Countries</Option>
            {Countries.single.borders.map((place,index)=>(
                <Option key={index} value={place}>
                    <Link style={{display:'block'}} to={`/country/${place}`}>{place}</Link>
                </Option>
            ))}


        </Select>
    )

}

export default BordersSelect