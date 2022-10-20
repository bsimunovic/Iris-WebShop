import React, { useContext, useState } from "react";
import { ProductContext } from "../context/DatabaseContext";
import { Link } from 'react-router-dom';
import { CartItemContext } from "../context/CartItemContext";

export const Product = () => {

   const [products] = useContext(ProductContext);
   const { onAdd } = useContext(CartItemContext);

  return (
    <>
        {products.length === 0 && <div class>slow internet...no products to display</div>}
        {products.map(product => (
            <div className='w-[300px] h-auto m-5 justify-start items-start text-xs font-semibold text-center shadow-2xl relative 'key={product.uuid}>
                <div className='w-[100%] h-[200px]'>
                
                    <Link to={`/productInfo/${product.uuid}`} state={{
                        item: product,
                    }}>
                    <img class ="object-fill h-[100%] w-[100%] brightness-90" src={product.flower.photo} alt="404 Not found"/>
                    </Link>
                    <div className='absolute w-[100%] mt-0 text-[#ffffff] inset-y-[170px] text-lg font-bold'>
                    {product.flower.name}
                </div>
                </div>
                
                <div className='bg-[#5A2317]/50 text-[#ffffff] text-sm font-bold w-[100%] mt-0 mb-0'>
                    {product.flower.price} $
                </div>
            
                <button onClick={() => onAdd(product)} className='bg-[#5A2317]/80 hover:bg-slate-600 text-[#ffffff] text-center font-bold text-base border-hidden cursor-pointer w-[100%] h-[30px] outline-none' >ADD TO CART</button>
                
            
            </div>
        ))}
    </>
)
  
}
