import React from "react";
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          price: 99,
          title: 'Cheap Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80'
        },
        {
          id: 2,
          price: 9999,
          title: 'Mobile Phone',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80'
        },
        {
          id: 3,
          price: 999,
          title: 'Laptop',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
        }
      ]
    }

  }
  handle_increase_quantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products: products
    });
  }

  handle_decrease_quantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;
    if (products[index].qty === 0) {
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

  handle_delete_product = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items
    });
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;
    products.forEach( (product) => {
      count += product.qty;
    });
    return count;
  }

  getCartTotal = ()=> {
    const { products } = this.state;
    let total = 0;
    products.forEach( (product) => {
      total += (product.qty * product.price)
    });
    return total;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar 
        cartCount={this.getCartCount()}/>
        <Cart
          products={products}
          onIncreaseQuantity={this.handle_increase_quantity}
          onDecreaseQuantity={this.handle_decrease_quantity}
          onDeleteProduct={this.handle_delete_product}
        />
        <div style={{fontSize:20,padding:10}} className="text-primary">Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}


export default App;
