import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = (props) => {
    return (
        <nav className="navbar bg-dark">
            <div className="container-fluid">
                <a href="/" className="navbar-brand text-light">Cart App</a>
                <i style={style.cartIcon} className="bi bi-cart2 text-light fs-3"></i>
                <span style={style.cartCount}>{props.cartCount}</span>
            </div>
        </nav>
    )
}

const style = {
    cartIcon: {
        height: 32,
        width: 32,
        marginRight: 20,
    },
    cartCount: {
        background: 'white',
        borderRadius: '50%',
        padding: '2px 10px',
        position: 'absolute',
        right: 20,
        top: 2
    }
};

export default Navbar;