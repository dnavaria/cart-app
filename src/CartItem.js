import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
        // this.increase_quantity = this.increase_quantity.bind(this);
        // this.decrease_quantity = this.decrease_quantity.bind(this);
    }
    increase_quantity = () =>  {
        // this.setState({qty:this.state.qty+1});
        this.setState((previous_state)=>{
            return {
                qty: previous_state.qty + 1  
            }          
        });
    }
    decrease_quantity = () => {
        if (this.state.qty === 0){
            return;
        }
        this.setState((previous_state)=>{
            return {
                qty: previous_state.qty - 1  
            }          
        });
    }
    render() {
        const { price, title, qty, img } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img src={img} alt="" style={style.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25, color: '#555' }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <a className="action-icons" href="#0" onClick={this.increase_quantity}><i className="bi bi-patch-plus"></i></a>
                        <a className="action-icons" href="#0" onClick={this.decrease_quantity}><i className="bi bi-patch-minus"></i></a>
                        <a className="action-icons" href="#0" ><i className="bi bi-trash"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

const style = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;