import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import MrDarkmode from './assets/MrDarkmode.png'
import './App.css'
import UseStateCounter from './components/UseStateCounter'
import UseStateInputEx from './components/UseStateInputEx'
import UseStateWithBoolean from './components/UseStateWithBoolean'
import UseStateWithArray from './components/UseStateWithArray'
import UseStateHideShowPassWord from './components/USeStateWithHideShowPass'
import UseStateWithProps from './components/USeStateWithProps'
import UseStatePostHW from './components/UseStatePostHW'
import UseEffectCounter from './components/UseEffectCounter'
import UseEffectUserListApi from './components/UseEffectUserListApi'
import UseEffectProductList from './components/UseEffectProductList'
import UseEffectCurrentTime from './components/UseEffectCurrentTime'
import UseEffectJavaProj from './components/UseEffectJavaProj'
import UseStateSimpleFormHandling from './components/UseStateSimpleFormHandling'
import MultiInputFileHandling from './components/MultiInputFileHandling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Welcome to UseState Management
      {/* <UseStateCounter/>
      <UseStateInputEx/> */}
      <UseStateWithBoolean/>
      <hr/>
      <UseStateWithArray/>
      <hr/>
      <UseStateHideShowPassWord/>
      <hr/>
       <UseEffectCounter/>
       <hr/>
       

      <div className="container">

        <h2>UseState With ProductProps</h2>

        <div className="row">

          <div className="col-md-4">
            <UseStateWithProps
              name="Mango"
              price="200"/>
          </div>
          <div className="col-md-4">
            <UseStateWithProps
              name="Car"
              price="20000000"/>
          </div>
          <div className="col-md-4">
            <UseStateWithProps
              name="Mobile"
              price="55000"/>
          </div>
        </div>
      </div>
<hr/>

<div className="container mt-5">
<h2>UseState Post Likecount Ex</h2>
        <div className="row">
  
          <div className="col-md-3">
            <UseStatePostHW
              title="Mayuri"
              description="Heyy I'm Mayuri,  I interior-design ur code with red squiggly lines👾"
              image="https://i.pinimg.com/736x/e6/17/7c/e6177c2d2484edd6a3a5c9814277bcfb.jpg"
            />

          </div>

          <div className="col-md-3">

            <UseStatePostHW
              title="Pallavi"
              description="Heyy I'm Pallavi, I squash the bugs before deployment😎"
              image="https://tse2.mm.bing.net/th/id/OIP.QomVfT9HJQ1B2iuni-Bv4wHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            />

          </div>

          <div className="col-md-3">

            <UseStatePostHW
              title="Harsh"
              description="Heyy I'm Mr. Detective Darkmode🕵️‍♂️ ,  I detect light mode "
              image={MrDarkmode}
            />

          </div>

          <div className="col-md-3">

            <UseStatePostHW
              title="Kaustubh"
              description="Hehe I'm Shinchan👋🏻, I create chaos for no reason"
              image="https://static.vecteezy.com/system/resources/previews/033/693/017/original/shinchan-cool-pose-with-sunglasses-free-vector.jpg"
            />

          </div>

        </div>

      </div>
      <hr/>
      <UseEffectUserListApi/>
      <hr/>
      <UseEffectProductList/>
      <hr/>
      <UseEffectCurrentTime/>
      <hr/>
      <UseEffectJavaProj/>
      <hr/>
      <UseStateSimpleFormHandling/>
      <hr/>
      <MultiInputFileHandling/>

     

    </>
  )

}

export default App
