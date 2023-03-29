import React, { useEffect } from 'react'

const Pedido = ({producto}) => {

    useEffect(()=>{
        console.log('El componente pedido fue actualizado')

        return () => {
            console.log('El componente fue desmontado');
        }
    })

    return (
        <>
            <li>{producto}</li>
        </>
    )
}

export default Pedido