

const reset = ()=>{
    return {type:'pageReset'}
}

const done = ()=>{
    return {type:'pageDone'}
}

export const resetPage = ()=>{
    return function(dispatch){

        dispatch(reset())

    }
}

export const closePageReset = ()=>{
    return function(dispatch){

        dispatch(done())
    }
}