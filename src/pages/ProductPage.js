import React from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import '../products.css'

export default function ProductPage(props) {
    let prices = ['466', '1023','306','160','290','360','1256','2100','2446','302','298']

    return (
        <>
        <Navbar />
        <h2>Today's Offers</h2>
        <div className="cards">
        <Product image={process.env.PUBLIC_URL + '/shoes/3225.jpg'} addtocart={props.addtocart} price={prices[0]} id='0'/>
        <Product image={process.env.PUBLIC_URL + '/shoes/3226.jpg'} addtocart={props.addtocart} price={prices[1]} id='1'/>
        <Product image={process.env.PUBLIC_URL + '/shoes/3227.jpg'} addtocart={props.addtocart} price={prices[2]} id='2'/>
        <Product image={process.env.PUBLIC_URL + '/shoes/3228.jpg'} addtocart={props.addtocart} price={prices[3]} id='3'/>
        <Product image={process.env.PUBLIC_URL + '/shoes/3229.jpg'} addtocart={props.addtocart} price={prices[4]} id='4'/>
        <Product image={process.env.PUBLIC_URL + '/shoes/3230.jpg'} addtocart={props.addtocart} price={prices[5]} id='5'/>
        <Product image={process.env.PUBLIC_URL + '/shoes/3231.jpg'} addtocart={props.addtocart} price={prices[6]} id='6'/>
        <Product image={process.env.PUBLIC_URL + '/shoes/3232.jpg'} addtocart={props.addtocart} price={prices[7]} id='7'/>
        <Product image={process.env.PUBLIC_URL + '/shoes/3233.jpg'} addtocart={props.addtocart} price={prices[8]} id='8'/>
        <Product image={process.env.PUBLIC_URL + '/shoes/3234.jpg'} addtocart={props.addtocart} price={prices[9]} id='9'/>
        <Product image={process.env.PUBLIC_URL + '/shoes/3235.jpg'} addtocart={props.addtocart} price={prices[10]} id='10'/>
        </div>
        </>
    );
}