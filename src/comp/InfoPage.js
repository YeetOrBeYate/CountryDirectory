import React from "react"
import {useDispatch, useSelector} from 'react-redux';
import {Card, Divider} from "antd"
import {LoadSingleCountry} from "../Actions/CountriesActions"
import {loadStatistics} from "../Actions/StatisticsActions"

const InfoPage = (props)=>{

    props.changeOpen(true)

    const Countries = useSelector(state=>state.Countries)
    const Statistics = useSelector(state=>state.Statistics)
    const dispatch = useDispatch()

    React.useEffect(()=>{

        dispatch(loadStatistics())
        dispatch(LoadSingleCountry(props.match.params.code))

    },[])

    if(!Statistics.avgArea || !Countries.single){
        return(<div>
            loading...
        </div>)
    }

    return(
        <div className="Info">
            {console.log(Statistics)}
            {console.log(Countries.single)}
            <Card
                style={{width:"50%", height:"70%"}}
                cover={<img alt="Flag picture" src={Countries.single.flag}/>}
            >
                <Card.Meta style={{marginBottom:"14px"}} title={Countries.single.name}/>
                <p>Name: {Countries.single.name}</p>
                <p>Capital: {Countries.single.capital}</p>
                <p>{Countries.single.region}{Countries.single.subregion}</p>
                <p>Population: {Countries.single.population}</p>
                <p>Area: {Countries.single.area}</p>
                <p>Gini: {Countries.single.gini}</p>
                {Countries.single.currencies.map((dollar,index)=>(
                    <p key={index}>{dollar.code}|{dollar.name}|{dollar.symbol}</p>
                ))}
                {Countries.single.languages.map((lang,index)=>(
                    <p key={index}>{lang.name}</p>
                ))}

            </Card>

            <div className="Stats">

            </div>
        </div>
    )

}

export default InfoPage