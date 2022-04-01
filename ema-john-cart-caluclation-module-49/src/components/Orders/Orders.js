import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import "./Orders.css"

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const navigate = useNavigate(); // Navigate use kore...

    const handleRemovePd = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem 
                        key={product.id} product ={product}
                        handleRemovePd= {handleRemovePd}
                        ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    {/* <Link to="/inventory">
                        <button>Proceed CheckOut</button>
                    </Link> */}

                    {/* import {useNavigate } from 'react-router-dom'; eita bad diye  useNavigate er jay gay Link use korte hobe... */}
                    
                    <button onClick={ () => navigate('/inventory')}>Proceed CheckOut</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;