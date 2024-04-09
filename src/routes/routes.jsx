import { Routes,Route } from "react-router-dom"
import { Homapage } from "../pages/homepage"
import { Categoriespage } from "../pages/categories"
export const Allroutes = ()=>{

    return(
    <>
     <Routes>
        <Route path='/' element={<Homapage/>}/>
        <Route path="/categories" element={<Categoriespage/>}/>
     </Routes>

    </>

    )
}