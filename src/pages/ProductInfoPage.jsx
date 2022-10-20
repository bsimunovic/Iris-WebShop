import React from 'react'
import { ProductInformation } from '../components/ProductInformation'
import { ProductProvider } from '../context/DatabaseContext'
import { useParams, useLocation } from 'react-router-dom'
import { CartItemProvider } from "../context/CartItemContext";


export const ProductInfoPage = (props) => {

    var id = useParams();
    var property = useLocation().state.item;

    return(
        <>
            <div className="min-h-screen">
              <ProductProvider>
                <CartItemProvider>
                    <ProductInformation value={property}></ProductInformation>
                </CartItemProvider>
              </ProductProvider>

          </div>
        </>
    )
}