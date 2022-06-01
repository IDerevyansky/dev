import React from "react";
import TopBanner from "../../../topBanner/topBanner";

import './News.css';
import news from './img/news.png';
import Back from "../../../back/back";

function News(){
    return(
        
    <>

        <TopBanner
        img={news}
        />
        
        <div className="container-general">
            <div className="block-top">
                <Back location='ru'/>

            </div>
        </div>
   
    </>

    );
}

export default News;