import { ProductProvider } from "../context/DatabaseContext";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/globalValues";
import { ProductRow } from "../components/ProductRow";

const Home = () => {
    return (
      <>
       
          <div className="flex-nowrap px-[5%] w-[98vw]">
            <ImageSlider slides={SliderData}></ImageSlider>
            <div className="justify-center pb-10">
              <ProductProvider>
                <ProductRow></ProductRow>
              </ProductProvider>
            </div>
          </div>

       
      </>
      );
}
 
export default Home;
