
import './App.css'


// components
import { Navbar } from './components/navbar'
import { Redlineloading } from './components/loading'

// Route
import { Allroutes } from './routes/routes'

function App() {


  return (
    <>
    <Navbar/>
    <Redlineloading/>
    <Allroutes/>
    </>
  )
}

export default App
