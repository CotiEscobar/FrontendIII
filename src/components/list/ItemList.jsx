import React from 'react'
import { useState } from 'react'

const ItemList = () => {

/*   const [item, setItem] = useState([])

  const addItem = () => {
    const newItem = `El elemento ${item.length + 1} ha sido agregado a la lista.`;
    setItem([...item, newItem]);
  }

  return (
    <div>
      <button onClick={addItem}>Agregar elemento</button>
      <ul>
        {item.map((articulo, index) => (
          <List key={index} info={articulo}></List>
        ))}
      </ul>
    </div>
  ) */

  const [myArray, setMyArray] = useState([]);

  const onClick = () => {
      setMyArray( arr => [...arr, `El producto ${arr.length + 1} ha sido añadido a la lista`]);
  };
  return [
      <input type="button" onClick={ onClick } value="Agregar producto" />,

      <div>{myArray.map(item =>
        <div>{ item }</div>
      )}
      </div>
  ]; 
}

export default ItemList