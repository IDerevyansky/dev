import React from "react";
import TopBanner from "../../../topBanner/topBanner";

import './News.css';
import news from './img/news.png';
import Back from "../../../back/back";
import NewsTreeBlock from "./newsThreeBlock";

function News(){
    return(
        
    <>

        <TopBanner
        img={news}
        />
        
        <div className="container-general">
            <div className="block-top">
                
                <div className="adpt_m">
                    <Back location='ru'/>
                    <h1 className="mb-[24px]" dangerouslySetInnerHTML={{__html:'Мои новости'}}></h1>
                </div>
                
                <NewsTreeBlock/>
            </div>
        </div>
   
    </>

    );
}

export default News;