
const initialState = {
    loading:false,
    failure:false,
    list:null,

    singleLoading:false,
    singleFailure:false,
    code:null,
    single:null
}

export const CountriesReducer = (state = initialState, action)=>{
    switch(action.type){
        case "countriesLoading":
            return {...state, loading:true}
        case "countriesSuccess":
            return {...state, loading:false, failure:false, list:action.payload}
        case "countriesFailure":
            return {...state, loading:false, failure:true}


        case "singleCountryLoad":
            return{...state, singleLoading:true}
        case "singleCountrySuccess":
            return {...state, singleLoading:false, singleFailure:false, single:action.payload}
        case "singleCountryFailure":
            return {...state, singleLoading:false, singleFailure:true}
        case "countryNotFound":
            return{...state, singleLoading:false, code:action.payload}
        default:
            return state
    }
}