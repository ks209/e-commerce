import React from 'react'
import { useSelector } from 'react-redux'
import Cartcard from '../CartCard/Cartcard'
export const Cart = () => {

    const userCart= useSelector((state)=>state.cartS.cart)
    // const total = useSelector((state)=>state.CartS.quantity)
        if (userCart.length > 0) {
            return(
                userCart.map((e)=>{
                    return <Cartcard props={e}/>
                })
            )
        } else {
            return (
                <div style={{display:'flex',justifyContent:'center'}}>
                    <h1>Cart Is Empty</h1>
                </div>
            )
        }
    }

    export default Cart;