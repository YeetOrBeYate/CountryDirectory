import React from 'react'
import {LoadCountries} from "../Actions/CountriesActions"
import {useDispatch, useSelector} from 'react-redux';
import {Card} from "antd"
import "../App.css"

const Home = ()=>{

    const dispatch = useDispatch()
    const Countries = useSelector(state=>state.Countries)
    const {Meta} = Card

    React.useEffect(()=>{

        dispatch(LoadCountries())
        
    },[])

    if(!Countries.list){
        return(
            <div>loading...</div>
        )
    }


    return(
        <div className="yeet">
            {Countries.list.map((place,index)=>(
                <Card hoverable style={{width:"25%"}} cover = {<img alt="flag" src={place.flag}/>}>
                    <Meta
                        title = {place.name}
                    />
                    <p>Region:{place.region}</p>
                    <p>Population:{place.population}</p>

                </Card>
            ))}
        </div>
    )

}

export default Home