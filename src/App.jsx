import './App.css'

// components
import { Hamburger } from './components/hamburger'
import { Navbar } from './components/navbar'
import { Redlineloading } from './components/loading'
import {Footer} from './components/footer'
import { Pickup_delivery } from './components/pickup-delivery'
// Route
import { Allroutes } from './routes/routes'

function App() {


  return (
    <>
    <Hamburger/>
    <Navbar/>
    <Redlineloading/>
    <Pickup_delivery/>
    <Allroutes/>
    <Footer/>
    </>
  )
}

export default App
