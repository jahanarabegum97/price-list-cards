import React from 'react';
import Feature from '../Feature/Feature';


const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 p-4 rounded-md flex flex-col'>
            <h2 className='text-center'>
                <span className='text-purple-500 font-extrabold text-5xl'>{price.price}</span>
                <span className='text-2xl font-bold'>/mon</span>
            </h2>
            <h5 className='text-3xl font-bold text-center my-6'>{price.name}</h5>

            <p className='font-bold text-white underline mb-5'>Features: </p>
            {
                price.features.map((feature,idx) => (<Feature key={idx} feature={feature}></Feature>))
            }
            <button className='w-full bg-green-500 hover:bg-green-600  mt-auto py-2 font-bold rounded-md text-white'>Buy Now</button>
        </div>
    );
};

export default PriceCard;
