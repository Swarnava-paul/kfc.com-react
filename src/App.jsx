import './App.css'

// components
import { Navbar } from './components/navbar'
import { Redlineloading } from './components/loading'
import {Footer} from './components/footer'

// Route
import { Allroutes } from './routes/routes'

function App() {


  return (
    <>
    <Navbar/>
    <Redlineloading/>
    <Allroutes/>
    <Footer/>
    </>
  )
}

export default App
