import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    price: 99,
                    title: 'Cheap Watch',
                    qty: 1,
                    img: ''
                },
                {
                    id: 2,
                    price: 9999,
                    title: 'Mobile Phone',
                    qty: 1,
                    img: ''
                },
                {
                    id: 3,
                    price: 999,
                    title: 'Laptop',
                    qty: 1,
                    img: ''
                }
            ]
        }

    }
    handle_increase_quantity = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products: products
        });
    }

    handle_decrease_quantity = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);
        if (products[index].qty === 0){
            return;
        }

        products[index].qty -= 1;
        if (products[index].qty === 0){
            products[index].qty = 1;
        }
        this.setState({
            products: products
        });
    }

    // handle_delete_product = (product) =>{
    //     const {products} = this.state;
    //     const index = products.indexOf(product);
    //     if (products.length === 0){
    //         return;
    //     }
    //     delete products[index];
    //     this.setState({
    //         products: products
    //     });
    // }

    handle_delete_product = (id) =>{
        const {products} = this.state;
        const items = products.filter((item)=> item.id !== id);
        this.setState({
            products: items
        });
    }
    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem 
                        product={product} 
                        key={product.id}  
                        onIncreaseQuantity={this.handle_increase_quantity}
                        onDecreaseQuantity={this.handle_decrease_quantity}
                        onDeleteProduct={this.handle_delete_product}
                        />
                    )
                })}
            </div>
        )
    }
}


export default Cart;
