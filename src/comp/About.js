import React from 'react'

const About = (props)=>{

    React.useEffect(()=>{
        console.log("loaded")
    },[])

    props.changeOpen(false)

    return(
        <div>
            Aboutpage
        </div>
    )
}

export default About