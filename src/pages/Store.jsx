import { Product } from "../components/Product";
import { CategoryCheckBox } from "../components/CategoryCheckBox";
import { ProductProvider } from "../context/DatabaseContext";
import { CartItemProvider } from "../context/CartItemContext";

const Store = () => {
    return (
      <ProductProvider>
        <div className="flex justify-between min-h-screen flex-row p-[3%] px-[6%]">
          <div className="basis-[100%]">
            <div className='flex justify-center items-center flex-wrap'>
            <CartItemProvider>
              <Product></Product>
            </CartItemProvider>
            </div>
          </div>
        </div>
      </ProductProvider>
      );
}
 
export default Store;
