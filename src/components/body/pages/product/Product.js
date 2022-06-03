import React from "react";
import TopBanner from "../../../topBanner/topBanner";

import './Product.css';
import product from './img/product.png';
import Back from "../../../back/back";

function Product(){
    return(
        
    <>

        <TopBanner
        img={product}
        />
       
        <div className="container-general">
            <div className="block-top">
                 <Back location='ru'/>

            </div>
        </div>
   
    </>

    );
}

export default Product;