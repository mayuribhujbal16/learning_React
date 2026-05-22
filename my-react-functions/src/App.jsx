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
import AccordionEx from './component/AccordionEx'




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
           <hr/>
        </div>
      </div>

      <hr/> 

      <div className="container">
        <h2>Card Props</h2>

        <div className="row">
          <div className="col-md-4">
            <CardProps
            title="My Plan vs My Energy"
            description="Plan: be productive. Energy: absolutely not. The audacity of my to-do list 📝😮‍💨"
            />
          </div>
          <div className="col-md-4">
            <CardProps 
              title="Join CJP or Cry" 
              description="Membership perks: immortality, night shift access, 0 skincare routine. Initiation: survive one slipper. Most can't even 😮‍💨" 
            />
          </div>
          <div className="col-md-4">
            <CardProps 
              title="Your Goal Isn't Lazy, You're Tired" 
              description="Rest isn't quitting. You're not behind bcuz you needed a break. Burnout isn't the price of ambition." 
            />
          </div>
        </div>

        
      </div>
      <hr/>


      <div>
        <PassingBoolean isAdmin={false}/>
         <hr/>
        <PassingObject info={student}/>
         <hr/>
        <h2>Passing Array </h2>
        <PassingArray list={subjects}/>
         <hr/>
      </div>
     
       
      <div className="accordion" id="accordionEx">
        <AccordionEx
        id="1"
        title="Wht is react?"
        content="React is a Js Library. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquid optio excepturi ut. Dolores cupiditate nam fugiat, odit, possimus impedit eaque explicabo consequatur eius unde dolorem rerum consequuntur quasi neque."
        />
      <hr/>
        <AccordionEx
        id="2"
        title="Why FCT?"
        content="B coz we go 100% on jobs. no crumbs left💼.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquid optio excepturi ut. Dolores cupiditate nam fugiat, odit, possimus impedit eaque explicabo consequatur eius unde dolorem rerum consequuntur quasi neque."
        />
      <hr/>
        <AccordionEx
        id="3"
        title="Why not FCT?"
        content="Be so for real. There's literally no reason not to join FCT.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquid optio excepturi ut. Dolores cupiditate nam fugiat, odit, possimus impedit eaque explicabo consequatur eius unde dolorem rerum consequuntur quasi neque."
        />
        <hr/>

      </div>

    </>
  )
};

export default App
