import {Box,Grid,Text,Button,Image,Flex,Skeleton,SkeletonText} from '@chakra-ui/react'


//react hooks
import { useState ,useContext } from 'react'
import React from 'react'
//context
import { cartContext } from '../contexts/cart-context'

export const PinCodeNotAvailable = ()=>{
    const{cart,setCart}=React.useContext(cartContext)
console.log(cart);
    return(
        <>
        
        </>
    )
}