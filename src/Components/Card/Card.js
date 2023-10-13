import React, { useEffect, useState } from 'react'
import "./Card.css"
import {addToCart} from '../../Features/cartSlice'
import { useDispatch, useSelector } from 'react-redux'


const Card = (el) => {

    const [flashMessage, setFlashMessage] = useState('');
const dispatch= useDispatch();


const atc=(e)=>{
    e.preventDefault();
    dispatch(addToCart(el.props))
    setFlashMessage('Added to cart')
}

useEffect(() => {
    const timer = setTimeout(() => {
      setFlashMessage('');
    }, 1500); // Remove flash message after 3 seconds

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, [flashMessage]);



const cart = useSelector((state)=>state.cartS.cart);
console.log(cart)


  return (




    <div className='card-wrapper' >
        <div className='img-wrapper'>
            <img src={el.props.image} alt={el.props.title}/>
            <h3 className='title'>{el.props.title}</h3>
        </div>
        <div className='price-wrapper'>
            <h3 className='price'>Rs.{el.props.price}</h3>
            <h4 style={{color: "yellow"}} className='rating'>{el.props.rating.rate}</h4>
        </div>
        <div className='functions'>
            <button onClick={atc}><h5 style={{color:'red'}}>
                Add To Cart
                </h5>
                </button>
        </div>      
        {flashMessage && <div className="flash-message">{flashMessage}</div>}
    </div>
  )
}
 
export default Card
