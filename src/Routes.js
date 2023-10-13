import React from 'react'
import {Routes,Route} from 'react-router-dom'
import CartPage from './Components/CartPage/CartPage'
import Home from './Components/home/Home'
import CheckoutPage from './Components/CheckOut/CheckoutPage'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
const AllRoutes = () => {
  return (
        <Routes>
        <Route exact path='/Cart' element={<CartPage/>}/>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Checkout' element={<CheckoutPage/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        </Routes>
  )
}

export default AllRoutes
