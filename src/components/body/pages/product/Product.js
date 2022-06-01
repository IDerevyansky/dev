import React from "react";
import TopBanner from "../../../topBanner/topBanner";

import './Product.css';
import product from './img/product.png';

function Product(){
    return(
        
    <>

        <TopBanner
        img={product}
        />
       
        <div className="container-general">
            <div className="block">

            </div>
        </div>
   
    </>

    );
}

export default Product;