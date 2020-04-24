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
            console.log("err",err)
        })
    }
}