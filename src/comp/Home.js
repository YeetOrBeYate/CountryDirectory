import React from 'react'
import {LoadCountries} from "../Actions/CountriesActions"
import { loadCountriesNotif} from "./Utils"
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux';
import {Card, Pagination} from "antd"
import "../App.css"

const Home = (props)=>{

    const loadVar = [0,0,0,0,0,0,0,0]

    props.changeOpen(true)

    const dispatch = useDispatch()
    const Countries = useSelector(state=>state.Countries)
    const {Meta} = Card

    const [currentPage, setCurrentPage] = React.useState(1)
    const [cardsPerPage, setCardsPerPage] = React.useState(8)

    //last card on the page will be number 8
    const indexOfLastCard = currentPage * cardsPerPage
    //first card will be number 0
    const indexOfFirstCard = indexOfLastCard-cardsPerPage

    React.useEffect(()=>{

        dispatch(LoadCountries())

        if(Countries.failure){
            loadCountriesNotif()
        }
        
    },[Countries.failure])


    const changePage = (page)=>{
        setCurrentPage(page)
    }

    const changePageSize = (current, size)=>{
        console.log("size",size, "current", current)
        setCurrentPage(current)
        setCardsPerPage(size)
    }

    if(!Countries.list || Countries.loading){
        return(
            <div className="yeet">
                {loadVar.map((card)=>(
                    <Card loading = {true} style={{height:"350px", display:'block', width:"20%", margin:"1%"}}>
    
                        <Meta
                        title="This is the title"
                        description="This is the description"
                        >
                            <p>Yeet</p>
                            <p>Or</p>
                            <p>Be</p>
                            <p>Yate</p>
                        </Meta>
                    </Card>
                ))}
            </div>

            
        )
    }


    return(
        <div>
            <div className="yeet">
                {Countries.list.slice(indexOfFirstCard,indexOfLastCard).map((place,index)=>(
                    <Link to = {`/country/${place.alpha3Code}`}>
                        <Card key={index} hoverable  cover = {<img alt="flag" src={place.flag}/>}>
                            <Meta
                                title = {place.name}
                                style={{marginBottom:'14px'}}

                            />
                            <p>Capital: {place.capital}</p>
                            <p>Population: {place.population}</p>
                            <p>Region: {place.region}</p>

                        </Card>
                    </Link> 
                ))}
            </div>
            <Pagination 
                defaultPageSize={cardsPerPage} 
                current={currentPage} 
                onChange={changePage} 
                total = {Countries.list.length}
                showSizeChanger={true}
                onShowSizeChange={changePageSize}
                pageSizeOptions={["8","16","24","32"]} />
        </div>
    )

}

export default Home