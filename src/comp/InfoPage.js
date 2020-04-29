import React from "react"
import {useDispatch, useSelector} from 'react-redux';
import {loadStatistics} from "../Actions/StatisticsActions"

const InfoPage = (props)=>{

    const Statistics = useSelector(state=>state.Statistics)
    const dispatch = useDispatch()

    React.useEffect(()=>{

        dispatch(loadStatistics())

    },[])

    if(!Statistics.avgArea){
        return(<div>
            loading...
        </div>)
    }

    return(
        <div>
            {console.log(Statistics)}
            infopage
        </div>
    )

}

export default InfoPage