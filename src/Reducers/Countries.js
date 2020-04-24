
const initialState = {
    loading:false,
    failure:false,
    list:null
}

export const CountriesReducer = (state = initialState, action)=>{
    switch(action.type){
        case "countriesLoading":
            return {...state, loading:true}
        case "countriesSuccess":
            return {...state, loading:false, list:action.payload}
        case "countriesFailure":
            return {...state, loading:false}
        default:
            return state
    }
}