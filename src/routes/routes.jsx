import { Routes,Route } from "react-router-dom"

//pages
import { Homapage } from "../pages/homepage"
import { Categoriespage } from "../pages/categories"
import { StartOrder } from "../pages/start-order"
import { PinCodeNotAvailable } from "../pages/pincode-not-available"
export const Allroutes = ()=>{

    return(
    <>
     <Routes>
        <Route path='/' element={<Homapage/>}/>
        <Route path="/categories" element={<Categoriespage/>}/>
        <Route path='/order' element={<StartOrder/>}/>
        <Route path="/P-not-available" element={<PinCodeNotAvailable/>}/>
     </Routes>

    </>

    )
}