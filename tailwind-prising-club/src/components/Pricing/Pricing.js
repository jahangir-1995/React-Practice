import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {id: 1, name: "Free", price: 0, benefits: [
            "lifetime Free",
            "unlimited deals",
            "localized deals"
        ]},
        {id: 2, name: "Regular", price: 9.00, benefits: [
            "extra maintains",
            "unlimited deals",
            "localized deals"
        ]},
        {id: 3, name: "Premium", price: 19.00, benefits: [
            "lifetime Premium Access",
            "unlimited deals",
            "localized deals"
        ]}
    ]
    return (
        <div className='bg-indigo-200 p-4 mt-8'>
            <h1 className='text-6xl'>Best Deals</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos voluptate maiores illum laborum aspernatur? Eaque quaerat repudiandae nulla neque.</p>

            <div className='grid md:grid-cols-3 gap-3'>
                {
                    pricingOptions.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;