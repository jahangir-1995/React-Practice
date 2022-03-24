import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'
import { addToDb } from '../../utilities/fakedb';


const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id); // local storage a add kora hoise..
    }

    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart= {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;