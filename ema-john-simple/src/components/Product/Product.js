import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, seller, price, ratings} = props.product;
    return (
        <div className="product">
            <img src={img} alt="Shoe" />
            <p className="product-name">{name}</p>
        </div>
    );
};

export default Product;