import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// components
import { Navbar } from './components/navbar'
import { Redlineloading } from './components/loading'
import { Imagemain } from './components/mainimage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Redlineloading/>
    <Imagemain/>
    </>
  )
}

export default App
