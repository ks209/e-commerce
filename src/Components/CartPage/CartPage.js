import React from 'react'
import Cart from '../Cart/Cart'
import { useSelector } from 'react-redux'
import './CartPage.css'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
const CartPage = () => {

    const cart = useSelector((state)=>state.cartS.cart);
    console.log('s  ',cart)
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
        totalQuantity += item.quantity;
        totalPrice += item.quantity * item.price;
    });
  
    return (
<>
        <Navbar/>
    <div className='cart-page'>

        <div style={{display:'flex',justifyContent:'center'}}>
                    <h1>Your Cart</h1>
                </div>
      <Cart/>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div className='t'>
                <h2>Total Quantity: {totalQuantity}</h2>
                <h2>Total Price: Rs.{totalPrice.toFixed(2)}</h2>
            </div>
            </div>
      <div style={{display:'flex',justifyContent:'center'}}>
      <Link to='/CheckOut'>
      <button style={{width:'100%',height:'100%', backgroundColor: 'blueviolet'}}>Check Out</button>
      </Link>
                </div>
    </div>
    </>
  )
}

export default CartPage
