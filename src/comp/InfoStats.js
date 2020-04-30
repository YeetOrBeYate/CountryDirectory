import React from "react"
import {useDispatch, useSelector} from 'react-redux';
import {Statistic, Row, Col} from "antd"


const InfoStats = (props)=>{

    const dispatch = useDispatch()

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
                        value={props.comparePop}
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
                        value={props.compareArea}
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
                        value={props.compareGini}
                    />
                </Col>
            </Row>
        </div>
    </div>)
}

export default InfoStats