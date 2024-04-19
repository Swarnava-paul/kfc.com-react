
import { createContext ,useState} from "react";

export const DeliveryPickupContext = createContext('')

export const  DeliveryPickupContextProvider = (props)=>{

    const[onDeliveryComponent,setOnDeliveryComponent]=useState('none');

return(
    <>
    <DeliveryPickupContext.Provider value={{onDeliveryComponent,setOnDeliveryComponent}}>
    {props.children}
   </DeliveryPickupContext.Provider>
    </>
)

}