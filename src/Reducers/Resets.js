

const initialState={
    pageReset:false
}

export const ResetReducer = (state = initialState, action)=>{
    switch(action.type){
        case "pageReset":
            return {...state, pageReset:true}
        case "pageDone":
            return {...state, pageReset:false}
        default:
            return state
    }
}