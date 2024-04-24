import { Routes,Route } from "react-router-dom"

//pages
import { Homapage } from "../pages/homepage"
import { Categoriespage } from "../pages/categories"
import { StartOrder } from "../pages/start-order"

export const Allroutes = ()=>{

    return(
    <>
     <Routes>
        <Route path='/' element={<Homapage/>}/>
        <Route path="/categories" element={<Categoriespage/>}/>
        <Route path='/order' element={<StartOrder/>}/>
     </Routes>

    </>

    )
}