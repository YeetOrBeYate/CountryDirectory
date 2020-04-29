import React from "react"
import {useDispatch, useSelector} from 'react-redux';
import {Statistic, Row, Col} from "antd"
import {LoadSingleCountry} from "../Actions/CountriesActions"
import {loadStatistics} from "../Actions/StatisticsActions"

const InfoStats = (props)=>{

    const Statistics = props.stats
    const dispatch = useDispatch()
    {console.log(Statistics)}
    console.log(props)

    return(
    <div className="Stats">

        <div className = "statDiv">
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic
                        title="Population"
                        value={props.population}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="Average Population"
                        value={Statistics.avgPopulation}
                    />
                </Col>
            </Row>
        </div>
        <div className = "statDiv">
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic
                        title="Area"
                        value={props.area}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="Average Area"
                        precision={2}
                        value={Statistics.avgArea}
                    />
                </Col>
            </Row>
        </div>
        <div className = "statDiv">
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic
                        title="gini"
                        value={props.gini}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="Average gini"
                        precision={2}
                        value={Statistics.avgGini}
                    />
                </Col>
            </Row>
        </div>
    </div>)
}

export default InfoStats