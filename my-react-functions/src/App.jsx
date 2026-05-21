import { useState } from 'react'
// import FunctionEx from './component/functions'
import EventExample from './component/EventExample'
import UserCard from './component/ObjectExample'
import FruitListArray from './component/ArrayEx'
import CarListArray from './component/ArrayCarEx'
import VegitablesEx from './component/combinedArrayEx'
import ConditionalStatement from './component/ConditionalStatement'
import MessageProps from './component/MessageProps'
import {StudentProps, PassingBoolean, PassingObject, PassingArray } from './component/StudentProps'
import CardProps from './component/CardProps'




function App() {
  const student = {name: "Mayuri", age:21, city:"pune"}
  const subjects =["HTML","CSS","JS","Python"]
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FunctionEx/> */}
      {/* <EventExample/> */}
      {/* <UserCard/> */}
      {/* <FruitListArray/> */}
      {/* <CarListArray/> */}
      {/* <VegitablesEx/> */}
      {/* <ConditionalStatement/> */}

      <div className="container">
        <h2>Passing string as props</h2>
        <MessageProps text="Hello"/>
        <MessageProps text="Welcome to My World"/>
        <hr/>

        <div className='border border-danger p-5 m-4'>
          <StudentProps name="Mayuri" age={21} city="Pune"/>
          <hr/>
          <StudentProps name="Pallavi" age={20} city="Delhi"/>
        </div>
      </div>

      <hr/> 

      {/* <div className="container">
        <div className="row">
          <div className="col-md-4">
            <CardProps
            title="Hello"
            description=" learning react js."
            />
          </div>
          <div className="col-md-4">
            <CardProps 
              title="Welcome to FCT" 
              description=" hello welcome in FCT" 
            />
          </div>
          <div className="col-md-4">
            <CardProps 
              title="Hello Welcome" 
              description="Card Properties." 
            />
          </div>
        </div>

        
      </div>
      <hr/> */}
      <div>
        <PassingBoolean isAdmin={false}/>
        <PassingObject info={student}/>
        <h2>Passing Array </h2>
        <PassingArray list={subjects}/>
      </div>

    </>
  )
};

export default App
