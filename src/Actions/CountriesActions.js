import axios from 'axios'

const loading = ()=>{
    return {type:'countriesLoading'}
}

//exporting to reuse in the statistics folder
export const loadSuccess = (data)=>{
    return {type:'countriesSuccess', payload:data}
}

export const loadFailure = ()=>{
    return {type:'countriesFailure'}
}

const loadingSingle = ()=>{
    return {type:'singleCountryLoad'}
}

const loadSingleSuccess = (data)=>{
    return {type:'singleCountrySuccess', payload:data}
}

const loadSingleFailure = ()=>{
    return {type:'singleCountryFailure'}
}




export const LoadCountries = ()=>{
    return function(dispatch){

        dispatch(loading())

        return axios.get(`https://restcountries.eu/rest/v2/all`)
        .then(res=>{
            // console.log("res", res.data)
            dispatch(loadSuccess(res.data))
        })

        .catch(err=>{
            console.log("loaderr",err)
            dispatch(loadFailure())
        })
    }
}

export const LoadSingleCountry = (code)=>{

    return function(dispatch){

        dispatch(loadingSingle())

        return axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`)

        .then(res=>{
            
            dispatch(loadSingleSuccess(res.data))
            
        })

        .catch(err=>{
            console.log('single country err', err)
            dispatch(loadSingleFailure())
        })
    }

}

export const FilterCountries = (region)=>{

    return function(dispatch){
        dispatch(loading())

        return axios.get(`https://restcountries.eu/rest/v2/region/${region}`)

        .then(res=>{
            dispatch(loadSuccess(res.data))
        })

        .catch(err=>{
            console.log("filter",err)
            dispatch(loadFailure())
        })
    }
}

export const FilterBlocs = (bloc)=>{
    return function(dispatch){
        dispatch(loading())

        return axios.get(`https://restcountries.eu/rest/v2/regionalbloc/${bloc}`)

        .then(res=>{
            dispatch(loadSuccess(res.data))
        })

        .catch(err=>{
            console.log('bloc',err)
            dispatch(loadFailure())
        })
    }
}