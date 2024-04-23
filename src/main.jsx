import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {ChakraProvider} from '@chakra-ui/react'

//contexts
import { HamburgerContextProvider } from './contexts/hamburger-context.jsx'
import {DeliveryPickupContextProvider} from './contexts/pickup-delivery-context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <ChakraProvider>
<DeliveryPickupContextProvider>
    <HamburgerContextProvider>
        <App />
    </HamburgerContextProvider>
 </DeliveryPickupContextProvider>
    </ChakraProvider>
    </BrowserRouter>

)
