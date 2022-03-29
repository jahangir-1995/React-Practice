
import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {
    const {name, price, benefits} = props.option;
    return (
        <div className='bg-white p-4 rounded-lg '>
           <h2 className='bg-indigo-200 py-2 text-xl font-bold'>{name}</h2>

           <p>
               <span className='text-4xl font-bold'>${price}.00</span>
               <span className='text-xl font-bold text-gray-500'>/month</span>
            </p>
            <div>
                <h3 className='text-xl text-left'>Benefits:  </h3>

                {
                    benefits.map(benefit =><Benefit benefit={benefit}></Benefit>)
                }
            </div>
            <btn className="bg-green-500 flex justify-center w-full py-2 rounded mt-6 text-white hover:text-green-700">
                Buy Now <ArrowRightIcon className='w-6 h-6 ml-3' ></ArrowRightIcon>
            </btn>
        </div>
    );
};

export default PricingOption;