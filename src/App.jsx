import './App.css'

// components
import { Navbar } from './components/navbar'
import { Redlineloading } from './components/loading'
import {Footer} from './components/footer'
import { Pickup_delivery } from './components/pickup-delivery'
// Route
import { Allroutes } from './routes/routes'

function App() {


  return (
    <>
    <Pickup_delivery/>
    <Navbar/>
    <Redlineloading/>
    <Allroutes/>
    <Footer/>
    </>
  )
}

export default App
