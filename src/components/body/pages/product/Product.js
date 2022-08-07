import React from "react";
import TopBanner from "../../../topBanner/topBanner";

import './Product.css';
import product from './img/product.png';
import Back from "../../../back/back";
import MainProductCard from "./mainProductCard";

function Product(){

let data = [
    {
        "title":"Title-1  asdasdas das d as dasdasd sadasdas dasd asd d adasdsad  sd ada sdasdasdasd as asdasdasdasd asda sdsadasd asdasdasdasdsadasd asd asdasdas dasd asdasddsd sd sdasda dasd asdasdsadasds ",
        "description":"asdasdas das d as dasdasd sadasdas dasd asd d adasdsad  sd ada sdasdasdasd as asdasdasdasd asda sdsadasd asdasdasdasdsadasd asd asdasdas dasd asdasddsd sd sdasda dasd asdasdsadasds ",
        "duration":"1,5 часа",
        "cost":"5 000 рублей",
        "features":"Text",
        "img":"https://images.unsplash.com/photo-1657564793579-9d49d4d7257b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        "link":"Title-1"
    },
    {
        "title":"Title-2",
        "description":"Text",
        "duration":"1,5 часа",
        "cost":"5 000 рублей",
        "features":"Text",
        "img":"https://images.unsplash.com/photo-1657311388704-d408dabda8c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "link":"Title-2"
    },
    {
        "title":"Title-3",
        "description":"Text",
        "duration":"1,5 часа",
        "cost":"5 000 рублей",
        "features":"Text",
        "img":"https://images.unsplash.com/photo-1657311388556-eeff862b3471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        "link":"Title-3"
    },
    {
        "title":"Title-4",
        "description":"Text",
        "duration":"1,5 часа",
        "cost":"5 000 рублей",
        "features":"Text",
        "img":"https://images.unsplash.com/photo-1657407722780-6505e2a840e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "link":"Title-4"
    },
    {
        "title":"Title-5",
        "description":"Text",
        "duration":"1,5 часа",
        "cost":"5 000 рублей",
        "features":"Text",
        "img":"https://images.unsplash.com/photo-1657307951412-0f6b74b68ca4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80",
        "link":"Title-5"
    },
    {
        "title":"Title-6",
        "description":"Text",
        "duration":"1,5 часа",
        "cost":"5 000 рублей",
        "features":"Text",
        "img":"https://images.unsplash.com/photo-1657297070939-f7d7d10cd7fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "link":"Title-6"
    },
    {
        "title":"Title-7",
        "description":"Text",
        "duration":"1,5 часа",
        "cost":"5 000 рублей",
        "features":"Text",
        "img":"https://images.unsplash.com/photo-1657290225234-df49bcbeb2cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        "link":"Title-7"
    },
    {
        "title":"Title-8",
        "description":"Text",
        "duration":"1,5 часа",
        "cost":"5 000 рублей",
        "features":"Text",
        "img":"https://images.unsplash.com/photo-1657232609542-e83516d85e76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        "link":"Title-8"
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



