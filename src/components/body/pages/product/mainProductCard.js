import React, { useState } from "react";
import { Link } from "react-router-dom";

import './mainProductCard.css';

function MainProductCard(props){

let gradientPostCard = "linear-gradient(180deg, rgba(42, 46, 59, 0) 0%, #2A2E3B 100%)";

let product = props.data.map((item, index)=>{

    return(

        <Link to={item.link} key={index} className="product" style={{ background:gradientPostCard + ", url("+ item.img +") center, center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>

            <div className="productContent row-start-2">

                <h2 className="productTitle" dangerouslySetInnerHTML={{__html:item.title}}></h2>

                <p className="productBodyText" dangerouslySetInnerHTML={{__html:item.description}}></p>
      
            </div>

        </Link>
    )

});

    return(

        <>

            <h1 className="mb-[24px]" dangerouslySetInnerHTML={{__html:"Задница"}}></h1>

                <div className="containerCards">

                    <div className="section productList">

                        {product}
            
                    </div>

                </div>

        </>

    );
}

export default MainProductCard;


