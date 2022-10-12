import React from 'react';

export default function CartProduct(props){
    return (
        <div className="ref-product" data-id="494001057" data-quantity="2">
            <div className="ref-product-col">
                <div className="ref-product-wrapper"><img className="ref-product-photo" src={process.env.PUBLIC_URL + props.image} alt="shoes" />
                    <div className="ref-product-data">
                        <div className="ref-product-info">
                            <div className="ref-product-name"> Adidas Shoes </div>
                                <div className="ref-product-variants">
                                    <div className="ref-product-variant">Size: L</div>
                                </div>
                                <div className="ref-product-personalization-holder"></div>
                            </div>
                        </div>
                    </div>
                    <div className="ref-product-controls">
                            <div className="ref-product-quantity">
                                <div className="ref-quantity-container" data-reflow-product="494001057" data-reflow-max-qty="999" data-reflow-quantity="2">
                                    <div className="ref-quantity-widget">
                                        <div className="ref-decrease"><span></span></div><input type="text" value="1" />
                                            <div className="ref-increase"><span></span></div>
                                        </div>
                                    </div>
                                    <div className="ref-product-qty-message"></div>
                                    <div className="remove">Remove</div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="ref-price-col">
                        </div>
                        <div className="ref-quantity-col">
                            <div className="ref-product-quantity">
                                <div className="ref-quantity-container" data-reflow-product="494001057" data-reflow-max-qty="999" data-reflow-quantity="2">
                                    <div className="ref-quantity-widget">
                                        <div className="ref-decrease"><span></span></div><input type="text" value="1" />
                                        <div className="ref-increase"><span></span></div>
                                    </div>
                                </div>
                                <div className="ref-product-qty-message"></div>
                                <div className="remove">Remove</div>
                            </div>
                        </div>
                        <div className="ref-total-col">
                            <div className="ref-product-total">
                                <div className="ref-product-total-sum">{props.total}</div>
                            </div>
                        </div>
                    </div>
    )
}