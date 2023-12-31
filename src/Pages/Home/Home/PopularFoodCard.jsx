import React from 'react';

const PopularFoodCard = ({ popularFood }) => {
    const { name, recipe, image, price } = popularFood
    return (
        <div className='flex items-center gap-3'>
            <img style={{ borderRadius: '0px 200px 200px 200px' }} className=' h-[100px] w-[100px]' src={image} alt="" />
            <div>
                <div className='flex justify-between items-center'>
                    <p className=' text-[#737373] text-xl'>{name}--------</p>
                    <p className=' text-[#BB8506]'>${price}</p>
                </div>
                <p className=' text-[#737373]'>{recipe}</p>
            </div>
        </div>
    );
};

export default PopularFoodCard;