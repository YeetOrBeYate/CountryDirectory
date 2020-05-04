import React from "react"
import {useDispatch, useSelector} from 'react-redux';
import {Card, Divider,Tabs,Skeleton} from "antd"
import {LoadSingleCountry} from "../Actions/CountriesActions"
import {loadStatistics} from "../Actions/StatisticsActions"
import { loadCountriesNotif,codeNotFound} from "./Utils"

import InfoStats from "./InfoStats"

const InfoPage = (props)=>{

    props.changeOpen(false)

    const Countries = useSelector(state=>state.Countries)
    const Statistics = useSelector(state=>state.Statistics)
    const dispatch = useDispatch()

    React.useEffect(()=>{

        dispatch(loadStatistics())
        dispatch(LoadSingleCountry(props.match.params.code))

    },[props.match.params.code])

    React.useEffect(()=>{

        if(Countries.singleFailure){
            loadCountriesNotif()
        }

    },[Countries.singleFailure])
    
    React.useEffect(()=>{
        
        if(Countries.code){
            codeNotFound()
        }

    },[Countries.code])

    if(!Statistics.avgArea || !Countries.single || Countries.singleLoading){
        return(
        <div className = "Info">
            <Card>
                <Skeleton>

                </Skeleton>
            </Card>
            <Card>
                <Skeleton>

                </Skeleton>
            </Card>
        </div>)
    }

    const findRegion = (key)=>{

        let population = null

        let filter = Countries.single.region
        filter+=key

        let list = Object.keys(Statistics)

        list.forEach((label)=>{
            if(label.toUpperCase().includes(filter.toUpperCase())){
                population = label
            }
        })

        return Statistics[`${population}`] 

    }

    return(
        <div className="Info">
            

            <Card
                cover={<img style={{border:".5px solid #f0f0f0"}} alt="Flag picture" src={Countries.single.flag}/>}
            >
                <Card.Meta style={{marginBottom:"14px"}} title={Countries.single.name} description={`Capital: ${Countries.single.capital}`}/>
                <Divider orientation="left">Region</Divider>
                    <div>
                        <span>{Countries.single.region}<Divider type="vertical"/>{Countries.single.subregion}</span>
                    </div>
                    <div style={{margin:"10px 0px "}}>
                        {/* <span>Trading blocs: </span> */}
                        {Countries.single.regionalBlocs.map((pact,index)=>{
                            if(Countries.single.regionalBlocs.length > 1){
                                return(<span key={index}>{pact.acronym}-{pact.name}<Divider type="vertical"/></span>)
                            }else{
                                return(<span key={index}>{pact.acronym}-{pact.name}</span>)
                            }
                        })}
                    </div>
                <Divider orientation="left">TimeZones</Divider>
                    <div style={{margin:"10px 0px "}}>
                            <span>Timezones: </span>
                            {Countries.single.timezones.map((time,index)=>{
                                if(Countries.single.timezones.length > 1){
                                    return(<span key={index}>{time}<Divider type="vertical"/></span>)
                                }else{
                                    return(<span key={index}>{time}</span>)
                                }
                            })}
                    </div>
                <Divider orientation="left">Currencies</Divider>
                    <div>
                        {Countries.single.currencies.map((dollar,index)=>(
                            <div key={index} style={{margin:"10px 0px"}}>
                                <span >{dollar.name}<Divider type="vertical"/>{dollar.code}<Divider type="vertical"/>{dollar.symbol}</span>
                            </div>
                        ))}
                    </div>
                <Divider orientation="left">Languages</Divider>
                    <div>
                        {Countries.single.languages.map((lang,index)=>{
                            if(Countries.single.languages.length >1){
                                return(<span key={index}>{lang.name}<Divider type="vertical"/></span>)
                            }else{
                                return(<span key={index}>{lang.name}</span>)
                            }
                        })}
                    </div>

            </Card>
            <Tabs type="card" >
                <Tabs.TabPane 
                    tab = "Global Statistics"
                    key="1"
                >
                    <InfoStats 
                    comparePop={Statistics.avgPopulation}
                    compareArea={Statistics.avgArea}
                    compareGini = {Statistics.avgGini}
                    name = {Countries.single.name}
                    region = {Countries.single.region}
                    population= {Countries.single.population}
                    area = {Countries.single.area}
                    gini = {Countries.single.gini}
                    />
                </Tabs.TabPane>
                <Tabs.TabPane
                    tab={`${Countries.single.region}-Region Statistics`}
                    key="2"
                >

                    <InfoStats
                    comparePop={findRegion("Pop")}
                    compareArea={findRegion("Area")}
                    compareGini={findRegion("Gini")}
                    name = {Countries.single.name}
                    region = {Countries.single.region}
                    population= {Countries.single.population}
                    area = {Countries.single.area}
                    gini = {Countries.single.gini}
                    />

                </Tabs.TabPane>
            </Tabs>

        </div>
    )

}

export default InfoPage