import React from 'react'
import {LoadCountries} from "../Actions/CountriesActions"
import {useDispatch, useSelector} from 'react-redux';
import {Card, Avatar} from "antd"
import "../App.css"

const Home = (props)=>{

    const loadVar = [0,0,0,0,0,0,0,0]



    props.changeOpen(true)

    const dispatch = useDispatch()
    const Countries = useSelector(state=>state.Countries)
    const {Meta} = Card

    React.useEffect(()=>{

        dispatch(LoadCountries())
        
    },[])

    if(!Countries.list || Countries.loading){
        return(
            <div className="yeet">
                {loadVar.map((card)=>(
                    <Card loading = {true} style={{height:"350px"}}>
    
                        <Meta
                        title="This is the title"
                        description="This is the description"
                        >
                            <p>Yeet</p>
                            <p>Or</p>
                            <p>Be</p>
                            <p>Yate</p>
                        </Meta>
                    </Card>
                ))}
            </div>

            
        )
    }


    return(
        <div className="yeet">
            {Countries.list.map((place,index)=>(
                <Card key={index} hoverable  cover = {<img alt="flag" src={place.flag}/>}>
                    <Meta
                        title = {place.name}
                        style={{marginBottom:'14px'}}

                    />
                    <p>Region: {place.region}</p>
                    <p>Population: {place.population}</p>

                </Card>
            ))}
        </div>
    )

}

export default Home