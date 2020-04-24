import axios from 'axios'

const loading = ()=>{
    return {type:'countriesLoading'}
}

const loadSuccess = (data)=>{
    return {type:'countriesSuccess', payload:data}
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
        })
    }
}