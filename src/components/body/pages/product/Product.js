import React from "react";
import TopBanner from "../../../topBanner/topBanner";

import './Product.css';
import product from './img/product.png';
import Back from "../../../back/back";
import MainProductCard from "./mainProductCard";

function Product(){

let data = [
    {
        "title":"Title-1",
        "text":"Text",
        "img":"https://images.unsplash.com/photo-1657564793579-9d49d4d7257b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        "link":"product/1"
    },
    {
        "title":"Title-2",
        "text":"Text",
        "img":"https://images.unsplash.com/photo-1657564793579-9d49d4d7257b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        "link":"product/2"
    },
    {
        "title":"Title-3",
        "text":"Text",
        "img":"https://images.unsplash.com/photo-1657564793579-9d49d4d7257b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        "link":"product/3"
    },
    {
        "title":"Title-4",
        "text":"Text",
        "img":"https://images.unsplash.com/photo-1657564793579-9d49d4d7257b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        "link":"product/4"
    },
    {
        "title":"Title-5",
        "text":"Text",
        "img":"https://images.unsplash.com/photo-1657564793579-9d49d4d7257b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        "link":"product/5"
    },
    {
        "title":"Title-6",
        "text":"Text",
        "img":"https://images.unsplash.com/photo-1657564793579-9d49d4d7257b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        "link":"product/6"
    },
    {
        "title":"Title-7",
        "text":"Text",
        "img":"https://images.unsplash.com/photo-1657564793579-9d49d4d7257b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        "link":"product/7"
    },
    {
        "title":"Title-8",
        "text":"Text",
        "img":"https://images.unsplash.com/photo-1657564793579-9d49d4d7257b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        "link":"product/8"
    },
];


    return(
        
    <>

        <TopBanner
        img={product}
        />
       
        <div className="container-general">
            <div className="block-top adpt_m">
                 <Back location='ru'/>

                 <MainProductCard data={data}/>

            </div>
        </div>
   
    </>

    );
}

export default Product;



