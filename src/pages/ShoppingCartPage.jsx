import { CartItem } from "../components/CartItem";
import { CartItemProvider } from "../context/CartItemContext";


export const ShoppingCartPage = () => {

    return (
      <>
      <div className="flex flex-col min-h-screen">
       <div className=" text-white bg-[#060606]/20 text-xl font-bold flex flex-row mt-5 justify-between px-[5%] mx-[15%] items-center w-[70%] py-[0.5%]"> 
        <p className="basis-[10%] text-left">Image</p>
        <p className="basis-[10%] text-center">Name</p>
        <p className="basis-[60%]"></p>
        <p className="basis-[10%] text-right">Quantity</p>
        <p className="basis-[10%] text-right">Price</p>
       </div>
       <div>
        <CartItemProvider>
        <CartItem></CartItem>
        </CartItemProvider>
       </div>
        </div>
      </>
      );
}
 
