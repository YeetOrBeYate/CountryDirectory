import axios from "axios"
import {loadSuccess,loadFailure} from "../Actions/CountriesActions"

const loadingStats = ()=>{
    return {type:"statisticsLoading"}
}

const successStats = (data)=>{

    let Asia =[]
    let Africa = []
    let Americas = []
    let Europe = []
    let Oceania = []

    let payload = {
        avgPopulation:0,
        avgAsiaPop:0,
        avgAfricaPop:0,
        avgAmericasPop:0,
        avgEuropePop:0,
        avgOceaniaPop:0,
        avgArea:0,
        avgAsiaArea:0,
        avgAfricaArea:0,
        avgAmericasArea:0,
        avgEuropeArea:0,
        avgOceaniaArea:0,
        avgGini:0,
        avgAsiaGini:0,
        avgAfricaGini:0,
        avgAmericasGini:0,
        avgEuropeGini:0,
        avgOceaniaGini:0
    }

    let totalPopulation = 0
    let totalArea = 0
    let totalGini = 0
    
    data.forEach(place => {
        totalPopulation +=place.population
        totalArea += place.area
        totalGini += place.gini

        if(place.region === "Asia"){
            Asia.push(place)
        }else if(place.region === "Africa"){
            Africa.push(place)
        }else if(place.region === "Americas"){
            Americas.push(place)
        }else if(place.region === "Europe"){
            Europe.push(place)
        }else if(place.region === "Oceania"){
            Oceania.push(place)
        }
    });

    payload.avgPopulation = Math.ceil(totalPopulation/data.length)
    payload.avgArea = totalArea/data.length
    payload.avgGini = totalGini/data.length

    totalPopulation = 0
    totalArea = 0
    totalGini = 0

    Asia.forEach(place => {
        totalPopulation +=place.population
        totalArea += place.area
        totalGini += place.gini
    })

    payload.avgAsiaPop = Math.ceil(totalPopulation/Asia.length)
    payload.avgAsiaArea = totalArea / Asia.length
    payload.avgAsiaGini = totalGini / Asia.length

    totalPopulation = 0
    totalArea = 0
    totalGini = 0
    //Africa
    Africa.forEach(place => {
        totalPopulation +=place.population
        totalArea += place.area
        totalGini += place.gini
    })

    payload.avgAfricaPop = Math.ceil(totalPopulation/Africa.length)
    payload.avgAfricaArea = totalArea / Africa.length
    payload.avgAfricaGini = totalGini / Africa.length

    totalPopulation = 0
    totalArea = 0
    totalGini = 0

    //Americas
    Americas.forEach(place => {
        totalPopulation +=place.population
        totalArea += place.area
        totalGini += place.gini
    })

    payload.avgAmericasPop = Math.ceil(totalPopulation/Americas.length)
    payload.avgAmericasArea = totalArea / Americas.length
    payload.avgAmericasGini = totalGini / Americas.length

    totalPopulation = 0
    totalArea = 0
    totalGini = 0
    //Europe
    Europe.forEach(place => {
        totalPopulation +=place.population
        totalArea += place.area
        totalGini += place.gini
    })

    payload.avgEuropePop = Math.ceil(totalPopulation/Europe.length)
    payload.avgEuropeArea = totalArea / Europe.length
    payload.avgEuropeGini = totalGini / Europe.length

    totalPopulation = 0
    totalArea = 0
    totalGini = 0

    //Oceana
    Oceania.forEach(place => {
        totalPopulation +=place.population
        totalArea += place.area
        totalGini += place.gini
    })

    payload.avgOceaniaPop = Math.ceil(totalPopulation/Oceania.length)
    payload.avgOceaniaArea = totalArea / Oceania.length
    payload.avgOceaniaGini = totalGini / Oceania.length

    totalPopulation = 0
    totalArea = 0
    totalGini = 0


    return{type:"statisticsSuccess", payload:payload}

}

const failureStats = ()=>{
    return {type:'statisticsFailure'}
}


export const loadStatistics = ()=>{
    return function(dispatch){

        dispatch(loadingStats())

        return axios.get(`https://restcountries.eu/rest/v2/all`)

        .then(res=>{
            dispatch(loadSuccess(res.data))
            dispatch(successStats(res.data))

        })

        .catch(err=>{
            console.log("stats",err)
            dispatch(failureStats())
        })

}

}