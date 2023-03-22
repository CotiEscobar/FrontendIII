import React from 'react'
import { useEffect , useState } from 'react'

const FunComponent = () => {
    const [name, setName] = useState('Paula')
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log('Se montó el componente de función');
        setTimeout(()=>{
            setName('Carlos')
        }, 2000)
        return()=>{
            console.log('Se desmontó el componente');
        }
    }, [])

    useEffect(()=>{
        console.log('Se actualizó el count del comp de función');
    },[])

    console.log('Se ha renderizado el componente de función');

  return (
    <div>
        <h3>{name}</h3>
        <button onClick={()=> setCount(count + 1)}>+</button>
        <h3>{count}</h3>
        <button onClick={()=> setCount(count - 1)}>-</button>
    </div>
  )
}

export default FunComponent