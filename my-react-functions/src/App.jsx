import { useState } from 'react'
// import FunctionEx from './component/functions'
import EventExample from './component/EventExample'
import UserCard from './component/ObjectExample'
import FruitListArray from './component/ArrayEx'
import CarListArray from './component/ArrayCarEx'
import VegitablesEx from './component/combinedArrayEx'
import ConditionalStatement from './component/ConditionalStatement'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <FunctionEx/> */}
    {/* <EventExample/> */}
    {/* <UserCard/> */}
    {/* <FruitListArray/> */}
    {/* <CarListArray/> */}
    {/* <VegitablesEx/> */}
    <ConditionalStatement/>

    </>
  )
}

export default App
