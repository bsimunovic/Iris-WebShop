import React, { useContext } from "react";
import { CartItemContext } from "../context/CartItemContext";

export const CartItem = () => {

    const {cartItems, onRemove, onAdd } = useContext(CartItemContext);
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.flower.price, 0);
    const totalPrice = itemsPrice;

    return (
        <>
            {cartItems.map(product => (
            <div className='text-white flex-row bg-[#5A2317]/50 text-2xl font-bold flex mt-5 justify-between px-[5%] mx-[15%] h-[70px] items-center w-[70%] py-[0.5%] 'key={product.uuid}>

                <div className="basis-[10%]">
                    <img className="h-[50px] w-[60px]" src={product.flower.photo}></img>
                </div>
                <p className='text-[#ffffff] text-left text-sm font-bold w-[100%] mt-0 mb-0 basis-[30%]'>
                    {product.flower.name}
                </p>
                <div className="basis-[30%] text-base">
                    <button onClick={() => onAdd(product)} className="basis-[10%] px-10 w-[100px] hover:bg-slate-600/30 text-[#ffffff] text-center font-semibold">Add</button>
                    <button onClick={() => onRemove(product)} className="basis-[10%] w-[100px] hover:bg-slate-600/30 text-[#ffffff] text-center font-semibold">Remove</button>
                </div>

                <p className="text-[#ffffff] text-sm text-right font-bold w-[100%] basis-[10%] pr-3">
                        {product.qty} 
                </p>

                <p className='text-[#ffffff] text-sm text-right font-bold w-[100%] mt-0 mb-0 basis-[10%]'>
                    {product.flower.price} $
                </p>
                    
            </div>
        ))}
        <div className="flex justify-between">
            <div className=" bg-[#060606]/20 mx-[15%] md:text-xs font-bold lg:text-base flex mt-[20px] justify-center md:h-[20px] lg:h-[40px] w-[15%] mb-5">
                <div className="text-white/90 m-2">
                    <div>Total: {totalPrice.toFixed(2)} $ </div>
                </div>
            </div>
            <div className=" bg-[#060606]/20 mx-[15%] md:text-xs font-bold lg:text-base flex mt-[20px] justify-center md:h-[20px] lg:h-[40px] w-[15%] mb-5 cursor-pointer hover:bg-[#060606]/60">
                <div className="text-white/90 m-2">
                    <div>CHECKOUT</div>
                </div>
            </div>
        </div>
        </>

            
    )


}