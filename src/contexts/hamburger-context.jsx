import { createContext ,useState} from "react";

export const HamburgerContext = createContext()//real context

export const HamburgerContextProvider = (props)=>{
 
    const[hamburgerDisplay,setHamburgerDisplay]=useState('none')//state

return(
    <>
    <HamburgerContext.Provider value={{hamburgerDisplay,setHamburgerDisplay}}>
    {props.children}
    </HamburgerContext.Provider>
    </>
)

}// context provider function