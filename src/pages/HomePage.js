import React from "react";
import Navbar from "./components/Navbar";
import '../home.css';

export default function HomePage() {
    return (
        <>
        <Navbar />
        <div className="home">
            <div class="parallax-outer">
                <span class="parallax-text" text="Sneax">Sneax</span>
                <div class="image"><img src="https://i.ibb.co/J2XV5s0/nike.png" /></div>
                <p style={{'color':"white", "margin-left":"20em", "textAlign": "right"}}>Your feet deserve the best</p>
                <button type="button" class="btn btn-dark"><a href="/products" style={{'text-decoration':'none', 'color':'aliceblue', 'alignSelf':"right"}}>Buy Now</a></button>
            </div>
        </div>
        </>
    );
}