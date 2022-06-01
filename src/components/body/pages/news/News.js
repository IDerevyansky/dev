import React from "react";
import TopBanner from "../../../topBanner/topBanner";

import './News.css';
import news from './img/news.png';

function News(){
    return(
        
    <>

        <TopBanner
        img={news}
        />
       
        <div className="container-general">
            <div className="block">

            </div>
        </div>
   
    </>

    );
}

export default News;