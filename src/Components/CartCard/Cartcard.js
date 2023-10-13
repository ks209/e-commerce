import React from 'react'
import './Cartcard.css'
import { useDispatch } from 'react-redux'
import {addToCart, removeFromCart } from '../../Features/cartSlice'

const Cartcard = (props) => {

    const dispatch = useDispatch();

    const triggerInc=(e)=>{
        e.preventDefault();
        dispatch(addToCart(props.props))
    }

    const triggerDec=(e)=>{
        e.preventDefault();
        dispatch(removeFromCart(props.props))
    }
  return (<div className='super'>
  <div className='wrapper'>
  
      <img className='cart-img'src={props.props.image} alt={props.name}></img>
    <div className='text-wrapper'>
        <h2 className='titles'>{props.props.name}</h2>
        <h3 style={{color:'blue'}}>{props.props.quantity}Pcs</h3>
        <div className='functions'>
        <button onClick={triggerDec} style={{backgroundColor:'red'}}>-</button>
        <button onClick={triggerInc} style={{marginLeft:'20px',backgroundColor:'green'}}>+</button>
        </div>
    </div>
    <div>
        <h3 style={{float:'right',color: 'green'}}>Rs.{props.props.price * props.props.quantity}</h3>
    </div>
    
    </div>
    </div>
  )
}

export default Cartcard
