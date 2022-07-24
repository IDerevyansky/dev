import React, { useState } from "react";
import TopBanner from "../../../topBanner/topBanner";

import './News.css';
import news from './img/news.png';
import Back from "../../../back/back";
import FirstBlock from "./FirstBlock";
import SecondBlock from "./SecondBlock";

function News(){

let data = {
    "news":[
        {
            "id":1,
            "img":"https://images.unsplash.com/photo-1603482594758-76e1fee40ff4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
            "title":"Title1",
            "litleText":"Text text text",
            "mainText":"MainText",
            "link":"postNumber1",
            "date":"12.34.2022"
        },
        {
            "id":2,
            "img":"https://images.unsplash.com/photo-1626843660564-155a2ba9f91a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            "title":"Title2",
            "litleText":"Text text text",
            "mainText":"MainText",
            "link":"postNumber2",
            "date":"12.34.2022"
        },
        {
            "id":3,
            "img":"https://images.unsplash.com/photo-1631743534860-5a5930eea72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
            "title":"Title3",
            "litleText":"Text text text",
            "mainText":"MainText",
            "link":"postNumber3",
            "date":"12.34.2022"
        },
        {
            "id":4,
            "img":"https://images.unsplash.com/photo-1620823667050-13a86c2a31dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            "title":"Title4",
            "litleText":"Text text text",
            "mainText":"MainText",
            "link":"postNumber4",
            "date":"12.34.2022"
        },
        {
            "id":5,
            "img":"https://images.unsplash.com/photo-1620833127432-2a0942a7fb41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            "title":"Title5",
            "litleText":"Text text text",
            "mainText":"MainText",
            "link":"postNumber5",
            "date":"12.34.2022"
        },
        {
            "id":6,
            "img":"https://images.unsplash.com/photo-1624459294159-d28c29938673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
            "title":"Title6",
            "litleText":"Text text text",
            "mainText":"MainText",
            "link":"postNumber6",
            "date":"12.34.2022"
        },
        {
            "id":7,
            "img":"https://images.unsplash.com/photo-1612173214570-d245923f2051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            "title":"Title7",
            "litleText":"Text text text",
            "mainText":"MainText",
            "link":"postNumber7",
            "date":"12.34.2022"
        },
        {
            "id":8,
            "img":"https://images.unsplash.com/photo-1626843660111-668a20d3f2ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
            "title":"Title8",
            "litleText":"Text text text Text text",
            "mainText":"MainText",
            "link":"postNumber8",
            "date":"12.34.2022"
        },
        {
            "id":9,
            "img":"https://images.unsplash.com/photo-1622063066580-c38e963d7f79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
            "title":"Title9",
            "litleText":"Text text text",
            "mainText":"MainText",
            "link":"postNumber9",
            "date":"12.34.2022"
        },
        {
            "id":10,
            "img":"https://images.unsplash.com/photo-1560630823-82229d6dc9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
            "title":"Title10",
            "litleText":"Text text text",
            "mainText":"MainText",
            "link":"postNumber10",
            "date":"12.34.2022"
        },
        {
            "id":11,
            "img":"https://images.unsplash.com/photo-1603482594758-76e1fee40ff4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
            "title":"Title11",
            "litleText":"Text text text",
            "mainText":"MainText",
            "link":"postNumber11",
            "date":"12.34.2022"
        },
        {
            "id":12,
            "img":"https://images.unsplash.com/photo-1626843660564-155a2ba9f91a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            "title":"Title12",
            "litleText":"Text text text",
            "mainText":"MainText",
            "link":"postNumber12",
            "date":"12.34.2022"
        },
        {
            "id":13,
            "img":"https://images.unsplash.com/photo-1631743534860-5a5930eea72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
            "title":"Title13",
            "litleText":"Text text text",
            "mainText":"MainText",
            "link":"postNumber13",
            "date":"12.34.2022"
        },
        {
            "id":14,
            "img":"https://images.unsplash.com/photo-1620823667050-13a86c2a31dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            "title":"Title14",
            "litleText":"Text text text",
            "mainText":"MainText",
            "link":"postNumber14",
            "date":"12.34.2022"
        },
        {
            "id":15,
            "img":"https://images.unsplash.com/photo-1620833127432-2a0942a7fb41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            "title":"Title15",
            "litleText":"Text text text",
            "mainText":"MainText",
            "link":"postNumber15",
            "date":"12.34.2022"
        },
        {
            "id":16,
            "img":"https://images.unsplash.com/photo-1624459294159-d28c29938673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
            "title":"Title16",
            "litleText":"Text text text",
            "mainText":"MainText",
            "link":"postNumber16",
            "date":"12.34.2022"
        },
        {
            "id":17,
            "img":"https://images.unsplash.com/photo-1612173214570-d245923f2051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            "title":"Title17",
            "litleText":"Text text text",
            "mainText":"MainText",
            "link":"postNumber17",
            "date":"12.34.2022"
        },
        {
            "id":18,
            "img":"https://images.unsplash.com/photo-1626843660111-668a20d3f2ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
            "title":"Title18",
            "litleText":"Text text text",
            "mainText":"MainText",
            "link":"postNumber18",
            "date":"12.34.2022"
        },
        {
            "id":19,
            "img":"https://images.unsplash.com/photo-1622063066580-c38e963d7f79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
            "title":"Title19",
            "litleText":"Text text text",
            "mainText":"MainText",
            "link":"postNumber19",
            "date":"12.34.2022"
        },
        {
            "id":20,
            "img":"https://images.unsplash.com/photo-1560630823-82229d6dc9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
            "title":"Title20",
            "litleText":"Text text text",
            "mainText":"MainText",
            "link":"postNumber20",
            "date":"12.34.2022"
        },
        {
            "id":21,
            "img":"https://images.unsplash.com/photo-1560630823-82229d6dc9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
            "title":"Title21",
            "litleText":"Text text text",
            "mainText":"MainText",
            "link":"postNumber21",
            "date":"12.34.2022"
        },
    ]
}


let configPosts = {
    "NUM_FirstPosts":7,
    "NUM_SecondPosts":10
}

const [numPosts, setNumPosts] = useState(configPosts.NUM_SecondPosts);
const [firstPost, setFirstPost] = useState([]);
const [secondPost, setSecondPost] = useState([]);

data.news.map((item, index)=>{

    if(index<=configPosts.NUM_FirstPosts - 1){
        firstPost[index] = item
    }
    
    if(index > configPosts.NUM_FirstPosts - 1 && index <= numPosts - 1){
        secondPost[index] = item
    }
    
});

    let poseted = secondPost.map((item, index)=>{

        return(
            <SecondBlock key={index} data={item}/>
        )

    });


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
                
                <FirstBlock data={firstPost}/>

                <div className="blockAfterNews adpt_m">
                    <div className="contentAfterNews">
                        
                     {poseted}

                    </div>
                    <div className="BtnShowMore" onClick={()=>{setNumPosts(numPosts + 10)}} dangerouslySetInnerHTML={{__html:'Показать ещё'}}></div>
                </div>

            </div>
        </div>
   
    </>

    );
}

export default News;
