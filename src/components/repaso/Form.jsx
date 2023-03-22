import React from 'react'
import { useState } from 'react'


const Form = (props) => {
  const [input, setInput] = useState([])

  const handleChange = (event) => {
    //limpiar los espacios del texto
    const cleanValue = event.target.value.trim()
    //no dejar escribir numeros, solo letras
    if (/[^a-zA-Z]/.test(cleanValue)) 
    return
    console.log(event.target.value) 
    setInput(cleanValue)//setear el valor del input
    
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!input) {
      alert('No se pueden enviar valores vacios')
    } else {
      console.log('enviando', input);
    }
    
    props.onSubmit(input)
  } 


  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange}/>
        <button type="submit">Agregar</button>
    </form>
  )
}

export default Form