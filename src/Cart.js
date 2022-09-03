import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import CartItem from './CartItem';

class Cart extends React.Component {
  render(){
    return (
        <div className="cart">
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
    )
  }
}


export default Cart;
