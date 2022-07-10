import React from "react";
import TopBanner from "../../../topBanner/topBanner";

import './Product.css';
import product from './img/product.png';
import Back from "../../../back/back";
import MainProductCard from "./mainProductCard";

function Product(){
    return(
        
    <>

        <TopBanner
        img={product}
        />
       
        <div className="container-general">
            <div className="block-top adpt_m">
                 <Back location='ru'/>
                 <MainProductCard />
            </div>
        </div>
   
    </>

    );
}

export default Product;



