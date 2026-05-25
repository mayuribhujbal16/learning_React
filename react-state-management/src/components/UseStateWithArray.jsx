import {React, useState} from 'react'

const UseStateWithArray = () => {
    const [items,setItems] = useState([]);
    const addItem = () => {
        setItems([...items,`Item ${items.length+1}`]);
    }

  return (
    <>
    <div>UseStateWithArray</div>
    <div className="container">
        <button onClick={addItem}>Add Item</button>

        <ul>
            {items.map((item,i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    </div>
    <hr/>
    </>
  )
}

export default UseStateWithArray

