import React from "react"
import {Statistic, Row, Col} from "antd"
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';


const InfoStats = (props)=>{

    const findColor = (type, stat, compare)=>{

        if(type === "gini"){
            if(stat >= compare){
                return '#cf1322'
            }else{
                return "#3f8600"
            }

        }else{
            if(stat >= compare){
                return '#3f8600'
            }else{
                return '#cf1322'
            }
        }
    }

    const findArrow = (type, stat, compare)=>{

        if(type === "gini"){
            if(stat >= compare){
                return <ArrowUpOutlined/>
            }else{
                return <ArrowDownOutlined/>
            }
        }else{
            if(stat >= compare){
                return <ArrowUpOutlined/>
            }else{
                return <ArrowDownOutlined/>
            }
        }
    }


    return(
    <div className="Stats">

        <div className = "statDiv">
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic
                        title="Country Population"
                        value={props.population}
                        valueStyle={{color: findColor("big",props.population, props.comparePop)}}
                        prefix={findArrow("big",props.population, props.comparePop)}
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
                        valueStyle={{color: findColor("big",props.area, props.compareArea)}}
                        prefix={findArrow("big",props.area, props.compareArea)}
                        suffix={<span>km<sup>2</sup></span>}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="Average Area"
                        precision={0}
                        value={props.compareArea}
                        suffix={<span>km<sup>2</sup></span>}
                    />
                </Col>
            </Row>
        </div>
        <div className = "statDiv">
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic
                        title="Gini"
                        value={props.gini}
                        valueStyle ={{color: findColor("gini",props.gini, props.compareGini)}}
                        prefix={findArrow("gini", props.gini, props.compareGini)}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="Average gini"
                        precision={0}
                        value={props.compareGini}
                    />
                </Col>
            </Row>
        </div>
    </div>)
}

export default InfoStats