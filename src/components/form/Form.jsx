import React from 'react'
import { useState } from 'react'

const Form = () => {

    const [data, setData] = useState({
        fullName: '',
        age: '',
        pokemonFav: ''
    });

    const [show, setShow] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Se envio el form')
        console.log(event)

        if(data.fullName.length > 0 && data.age >= 18 && data.pokemonFav.length >0){
            setShow(true)
        } 
    }

    
  return (
    <>
        <h2>Contanos cual es tu Pokemon preferido :)</h2>
        <form onSubmit={handleSubmit} className="form">
            <label>Nombre completo</label>
            <input type="text" className='input' onChange={(event) => setData({...data, fullName: event.target.value})}/>

            <label>Edad</label>
            <input type="text" className='input' onChange={(event) => setData({...data, age: event.target.value})}/>

            <label>Pokemon favorito</label>
            <input type="text" className='input' onChange={(event) => setData({...data, pokemonFav: event.target.value})}/>

            <button>Registrarme</button>
        </form>

        {
            show
            ?
            <div>
                <h3>Los datos ingresados son:</h3>
                <p>Nombre y apellido: {data.fullName}</p>
                <p>Edad: {data.age}</p>
                <p>Pokemon preferido: {data.pokemonFav}</p>
            </div>
            :
            <p>Alguno de los campos requeridos no se encuentra completo</p>
    
        }

    </>
  )
}

export default Form