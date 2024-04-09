import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// components
import { Navbar } from './components/navbar'
import { Redlineloading } from './components/loading'


// Route
import { Allroutes } from './routes/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Redlineloading/>
    <Allroutes/>
    </>
  )
}

export default App
