import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UseStateCounter from './components/UseStateCounter'
import UseStateInputEx from './components/UseStateInputEx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Welcome to UseState Management
      <UseStateCounter/>
      <UseStateInputEx/>
    </>
  )
}

export default App
