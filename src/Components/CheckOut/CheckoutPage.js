import React from 'react';
import { useSelector } from 'react-redux';
import './CheckOut.css';
import Navbar from '../Navbar/Navbar'

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cartS.cart);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (<>
  <Navbar/>
    <div className="container">
      <h1>Checkout Page</h1>
      <div className='order-summary'>
  <h2>Order Summary</h2>
  <br />
  <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      {cartItems.map((item) => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>${item.price.toFixed(2)}</td>
          <td>{item.quantity}</td>
          <td>${(item.quantity * item.price).toFixed(2)}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      <div>
        <p className="totalPrice">Total Price: Rs.{calculateTotalPrice().toFixed(2)}</p>
      </div>
      <div className='pi'>
  <h2>Payment Information</h2>
  <form>
    <label>
      Payment Method:
      <select>
        <option value="credit_card">Credit Card</option>
        <option value="debit_card">Debit Card</option>
        <option value="net_banking">Net Banking</option>
        <option value="upi">UPI</option>
      </select>
    </label>
    <br />
    <br />
    <label>
      Card Number:
      <input type="text" placeholder="Enter card number" />
    </label>
    <br />
    <br />
    <label>
      Expiry Date:
      <input type="text" placeholder="MM/YYYY" />
    </label>
    <br />
    <br />
    <label>
      CVV:
      <input type="password" placeholder="CVV" />
    </label>
    <br />
    <br />
    <label>
      Address:
      <textarea rows="4" placeholder="Enter your address"></textarea>
    </label>
    <br />
    <br />
    <label>
      Phone Number:
      <input type="tel" placeholder="Enter phone number" />
    </label>
    <br />
    <br />
    <button type="submit">Submit Payment</button>
  </form>
</div>

    </div>
    </>
  );
};



export default CheckoutPage;
