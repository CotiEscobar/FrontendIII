import React, { useEffect } from 'react'
import Pedido from './Pedido'
import { useState } from 'react'

const Pedidos = () => {
    const [pedido, setPedido] = useState('')


    useEffect(()=>{
        setTimeout(()=>{
            setPedido('Pizza')
        },2000)
    }, [])


    const cancelarPedido = () => {
        setPedido()
        alert('El pedido fue cancelado')
    }

    return (
        <>
        <h3>Su pedido:</h3>
        {pedido && <Pedido producto={pedido}/>}
        <button onClick={cancelarPedido}>Cancelar pedido</button>
        </>
    )
}

export default Pedidos