


//avgPopulation
//avgAsiaPop
//avgAfricaPop
//avgAmericasPop
//avrEuropePop
//avgOceaniaPop


//repeat for area

//repeat for gini
const initialState={
    loading:false,
    failure:false,
    avgPopulation:null,
    avgAsiaPop:null,
    avgAfricaPop:null,
    avgAmericasPop:null,
    avgEuropePop:null,
    avgOceaniaPop:null,
    avgArea:null,
    avgAsiaArea:null,
    avgAfricaArea:null,
    avgAmericasArea:null,
    avgEuropeArea:null,
    avgOceaniaArea:null,
    avgGini:null,
    avgAsiaGini:null,
    avgAfricaGini:null,
    avgAmericasGini:null,
    avgEuropeGini:null,
    avgOceaniaGini:null
}

export const StatisticsReducer = (state=initialState, action)=>{
    switch(action.type){
        case "statisticsLoading":
            return {...state, loading:true}
        case "statisticsSuccess":
            return {...state,
                loading:false, 
                avgPopulation:action.payload.avgPopulation,
                avgAsiaPop:action.payload.avgAsiaPop,
                avgAfricaPop:action.payload.avgAfricaPop,
                avgAmericasPop:action.payload.avgAmericasPop,
                avgEuropePop:action.payload.avgEuropePop,
                avgOceaniaPop:action.payload.avgOceaniaPop,
                avgArea:action.payload.avgArea,
                avgAsiaArea:action.payload.avgAsiaArea,
                avgAfricaArea:action.payload.avgAfricaArea,
                avgAmericasArea:action.payload.avgAmericasArea,
                avgEuropeArea:action.payload.avgEuropeArea,
                avgOceaniaArea:action.payload.avgOceaniaArea,
                avgGini:action.payload.avgGini,
                avgAsiaGini:action.payload.avgAsiaGini,
                avgAfricaGini:action.payload.avgAfricaGini,
                avgAmericasGini:action.payload.avgAmericasGini,
                avgEuropeGini:action.payload.avgEuropeGini,
                avgOceaniaGini:action.payload.avgOceaniaGini
            }
        case'statFailure':
            return {...state, failure:false}

        default:
            return state
    }
}