import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SimpsonApi = () => {
    const [simpson, setSimpson] = useState([{}])
    const url = 'https://thesimpsonsquoteapi.glitch.me/quotes'
    
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setSimpson(data))
    },[])

    console.log(simpson)
    return (
        <div>
            <h3>{simpson[0].character}</h3>
            <img src={simpson[0].image} alt="" /> 
        </div>
    )
}

export default SimpsonApi