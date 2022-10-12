import React from 'react';

export default function Product(props){
    let regularOrSolid = Math.random() > 0.5 ? true : false;
    return (
        <div className="product-card">
            <div className="first-container">
                <img src={props.image} />
                <h3>{'₹ ' + props.price}</h3>
            </div>
            <div className="overflow-container">
                <div className="second-container">
                    <div className="size-container">
                        <p>size :</p>
                        <div className="size">
                            <p>7</p>
                            <p>8</p>
                            <p>9</p>
                            <p>10</p>
                        </div>
                    </div>
        
                    <div className="ratings">
                    <p>Ratings: </p>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className={"fa fa-star" + regularOrSolid ? 'checked':''}></span>
                    </div>
                    <div className="button" id={props.id} onClick={props.addtocart}>Add to cart</div>
                </div>
            </div>
        </div>
    )
}