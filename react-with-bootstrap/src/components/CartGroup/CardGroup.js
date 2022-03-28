import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        { id: 1, name: "Laptop Dell", price: 55000 },
        { id: 2, name: "Laptop LG", price: 45000 },
        { id: 3, name: "Laptop hp", price: 47000 }
    ]
    return (
        <div>
            <h1>This is From Cart Group</h1>
            <div className='card-group'>
                {
                    products.map(product => <Card   key={product.id}
                        product={product}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default CardGroup;