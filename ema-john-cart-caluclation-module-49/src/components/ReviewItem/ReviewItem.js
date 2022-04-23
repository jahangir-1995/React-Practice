import React from 'react';
import "./ReviewItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = (props) => {
    const {name, img, price, shipping, quantity} = props.product;

    const {product, handleRemovePd} = props;

    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className="product-name" title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</p>
                    <p>Price: <span className="orang-color">${price}</span></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={ () => handleRemovePd(product)} className='delete-btn'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;