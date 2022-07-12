import React from "react";
import TopBanner from "../../../topBanner/topBanner";

import './News.css';
import news from './img/news.png';
import Back from "../../../back/back";
import NewsTreeBlock from "./newsThreeBlock";

function News(){

let data = {
    "news":[
        {
            "id":1,
            "img":"",
            "title":"Title1",
            "litleText":"Text text text",
            "date":"12.34.2022"
        },
        {
            "id":2,
            "img":"",
            "title":"Title2",
            "litleText":"Text text text",
            "date":"12.34.2022"
        },
        {
            "id":3,
            "img":"",
            "title":"Title3",
            "litleText":"Text text text",
            "date":"12.34.2022"
        },
        {
            "id":4,
            "img":"",
            "title":"Title4",
            "litleText":"Text text text",
            "date":"12.34.2022"
        },
        {
            "id":5,
            "img":"",
            "title":"Title5",
            "litleText":"Text text text",
            "date":"12.34.2022"
        },
        {
            "id":6,
            "img":"",
            "title":"Title6",
            "litleText":"Text text text",
            "date":"12.34.2022"
        },
        {
            "id":7,
            "img":"",
            "title":"Title7",
            "litleText":"Text text text",
            "date":"12.34.2022"
        },
        {
            "id":8,
            "img":"",
            "title":"Title8",
            "litleText":"Text text text",
            "date":"12.34.2022"
        },
        {
            "id":9,
            "img":"",
            "title":"Title9",
            "litleText":"Text text text",
            "date":"12.34.2022"
        },
        {
            "id":10,
            "img":"",
            "title":"Title10",
            "litleText":"Text text text",
            "date":"12.34.2022"
        },
    ]
}

const result = [];

for (let index = 0; index <= 6; index++) {
    result[index] = data.news[index];
}
// console.log(result);

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
                
                <NewsTreeBlock data={result}/>

                <div className="adpt_m">
                    
                </div>

            </div>
        </div>
   
    </>

    );
}

export default News;