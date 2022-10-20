import React, {useContext} from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { ProductContext } from '../context/DatabaseContext';
import { Link } from 'react-router-dom';

export const ProductRow = () => {

    const [products, setProducts] = useContext(ProductContext);

    const nextSlide = () => {
        var slider = document.getElementById('slider' );
        slider.scrollLeft = slider.scrollLeft - 500;
      };
      const prevSlide = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
      };

    return(
        <>
            <h2 className='text-white font-semibold md:text-2xl uppercase p-4'> Products </h2>
            <FaArrowAltCircleLeft className='absolute cursor-pointer text-4xl top-[100%] mt-[3%] left-[3%] z-[10] text-[#5A2317]/90' onClick={prevSlide} />
            <FaArrowAltCircleRight className='absolute cursor-pointer text-4xl top-[100%] mt-[3%] right-[3%] z-[10] text-[#5A2317]/90' onClick={nextSlide} />
            <div id={'slider'} className='w-full h-full overflow-x-hidden whitespace-nowrap scroll-smooth scrollbar-hidden relative'>
            {products.map((product) => (
                <div className='w-[300px] h-auto m-5 justify-start items-start text-xs font-semibold text-center inline-block shadow-2xl relative 'key={product.uuid}>
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
           
                </div>
            ))}
            </div>
            
           
        </>
    )
}