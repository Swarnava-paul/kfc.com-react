import { Routes,Route } from "react-router-dom"
import { Homapage } from "../pages/homepage"

export const Allroutes = ()=>{

    return(
    <>
     <Routes>
        <Route path='/' element={<Homapage/>}/>
     </Routes>

    </>

    )
}