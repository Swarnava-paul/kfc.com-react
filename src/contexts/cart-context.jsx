import React from "react";
import { createContext,useState } from "react";

export const cartContext = createContext('');

export const CartContextProvider = (props)=>{

    const[cart,setCart]=useState([ ])
    return(
     <cartContext.Provider value={{cart,setCart}}>
        {props.children}
     </cartContext.Provider>
    )
}