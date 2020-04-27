import React from 'react'
import {LoadCountries} from "../Actions/CountriesActions"
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
        
    },[])

    const changePage = (page)=>{
        setCurrentPage(page)
    }

    if(!Countries.list || Countries.loading){
        return(
            <div className="yeet">
                {loadVar.map((card)=>(
                    <Card loading = {true} style={{height:"350px"}}>
    
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
        <div className="yeet">
            {Countries.list.slice(indexOfFirstCard,indexOfLastCard).map((place,index)=>(
                <Card key={index} hoverable  cover = {<img alt="flag" src={place.flag}/>}>
                    <Meta
                        title = {place.name}
                        style={{marginBottom:'14px'}}

                    />
                    <p>Capital: {place.capital}</p>
                    <p>Region: {place.region}</p>
                    <p>Population: {place.population}</p>

                </Card>
            ))}
            <Pagination 
                defaultPageSize={cardsPerPage} 
                current={currentPage} 
                onChange={changePage} 
                total = {Countries.list.length}
                showSizeChanger={false} />
        </div>
    )

}

export default Home