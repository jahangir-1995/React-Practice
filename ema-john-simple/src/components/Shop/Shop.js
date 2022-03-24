import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'
import { addToDb, getStoredCart } from '../../utilities/fakedb';


const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect( () => {
        console.log("product load before fetch");
        fetch('products.json')
        .then(res => res.json())
        .then(data => 
            {setProducts(data)
            console.log("product loaded")
            })
    }, []);

    useEffect( () =>{
       console.log("Local storage first line",products)
        const storedCart = getStoredCart();
        const saveCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
                // console.log(addedProduct)
            }
        }
        setCart(saveCart);
       //  console.log("Local storage finished")
    }, [products]);

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