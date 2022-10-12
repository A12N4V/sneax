import React from 'react'
import Navbar from './components/Navbar'
import '../cart.css'
import CartProduct from './components/CartProduct'

export default function CartPage(props){
    let content = []
    console.log(props.cart)
    /*
    for (let n=0;n+=1;n<=props.cart.length){
        let m = 0;
        content.push(<CartProduct image={props.cart[m][0]} total={props.cart[m][1]}/>)
        m += 1
    }*/
    return (
        <>
        <Navbar />
        <div data-reflow-type="shopping-cart" data-aos="fade-down" data-aos-duration="1000">
        <div class="reflow-shopping-cart" style="display: block;">
            <div class="ref-loading-overlay"></div>
            {content[0]}
        </div>
        </div>
        </>
    )
}