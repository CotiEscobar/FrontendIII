import React, { useEffect, useState } from 'react'

const RandomDog = () => {
    const [dog, setDog] = useState({})
    const [change, setChange] = useState(false)

    const url = 'https://dog.ceo/api/breeds/image/random'

/*     const fetchData = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setDog(data))/* 
        .catch((err) => console.log(err)) */
/*     } 

    useEffect(()=>{
      fetchData()
    },[])
     */
    useEffect(()=>{
      fetch(url)
      .then((response) => response.json())
      .then((data) => setDog(data))/* 
      .catch((err) => console.log(err)) */
    },[change])

    console.log(dog);

  return (
    <div>
      <img src={dog.message} alt="" />
      <button onClick={() => setChange(!change)}>Cambiar de perrito</button>
    </div>
  )
}

export default RandomDog