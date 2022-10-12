import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark" style={{'backgroundColor':'black','padding':'5px'}}>
            <a className="navbar-brand" href="/">Sneax</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/buy">Proceed to buy</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/cart">Cart</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/products">Products</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}