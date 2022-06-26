import React from "react";
import { Link } from "react-router-dom";

import CallBackLarge from "../../../callBalck/callBack_large";
import Card from "../../../Product_card/Card";

import '../../../accordion/Accordion.css';
import './Main.css';
import Accordion from "../../../accordion/Accordion";
import FirstBanner from "../../../firstBanner/firstBanner";


  let data = {

    "FirstBanner":{
      "title":"Тут заголовок баннера",
      "bodyText":"Вам достаточно знать номер телефона данного человека, и вы можете создать ссылку, которая позволит начать с ним чат. Вам достаточно знать номер телефона данного человека, и вы можете создать ссылку, которая позволит начать с ним чат."
    },  
    "questions":[
      {
        "id":1,
        "title":"title 1",
        "bodyText":"qqqqqqqq",
      },
      {
        "id":2,
        "title":"title 2",
        "bodyText":"wwwwwwwwww",
      },
      {
        "id":3,
        "title":"title 3",
        "bodyText":"eeeeeeeeeee",
      },
      {
        "id":4,
        "title":"title 4",
        "bodyText":"rrrrrrrrrrrr",
      },
    ],
    "WhatItIsKineziology":{
      "title":"Что нужно знать о кинезиологии",
      "bodyText":"Он вкалывал все эти десять лет не для того, чтобы теперь замедлить ход к уже близкой победе. Я хочу поздравить вас всех с успешным завершением нашего дела – проект «Хинни и Смит» закончился очень удачно для всех нас. Теперь мы можем сами доставлять товары во все уголки страны, сокращая расходы и увеличивая прибыль.  – Рик поднял бокал с шампанским. – За замечательную команду с блестящим будущим! Он сделал глоток из бокала под гул всеобщего одобрения.<br/><br/> Его взгляд снова скользнул к отчужденной, но удивительно милой незнакомке. Девушка все так же стояла в дверях, наблюдая за его сотрудниками. У нее в руках не было бокала. И это нужно исправить. Мужчина опять потер подбородок. Следующей задачей было слияние с компанией «Спорта Ко» и удвоение объема продаж их спортивного оборудования. Разумеется, было весьма рискованно предпринимать этот шаг так быстро, но Рик не мог ждать.",
      "more":"Подробнее",
      "link":"WhatItIsKineziology"
    },
    "about":{
      "title":"Немного о себе",
      "bodyText":"Его взгляд снова скользнул к отчужденной, но удивительно милой незнакомке. Девушка все так же стояла в дверях, наблюдая за его сотрудниками. У нее в руках не было бокала. И это нужно исправить.Мужчина опять потер подбородок. Следующей задачей было слияние с компанией «Спорта Ко» и удвоение объема продаж их спортивного оборудования.",
      "link":"about",
      "more":"Подробнее"
    },
    "myNews":{
      "title":"Мои новости",
      "more":"Подробнее",
      "link":"news",
      "cardNews":[
        {
          "img":"https://images.unsplash.com/photo-1504908892453-3cb0b90b5002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=50",
          "title":"Title1",
          "shortText":"adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdas",
          "link":"news/#"
        },
        {
          "img":"https://images.unsplash.com/photo-1644232448481-a5e82f095196?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=50",
          "title":"Title2",
          "shortText":"adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdas",
          "link":"news/#"
        },
        {
          "img":"https://images.unsplash.com/photo-1610809027249-86c649feacd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=50",
          "title":"Title3",
          "shortText":"adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdas",
          "link":"news/#"
        },
        {
          "img":"https://images.unsplash.com/photo-1610555356070-d0efb6505f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=50",
          "title":"Title4",
          "shortText":"adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdas",
          "link":"news/#"
        },
        {
          "img":"https://images.unsplash.com/photo-1612676239016-41e2c92b8e06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=50",
          "title":"Title5",
          "shortText":"adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdas",
          "link":"news/#"
        }
      ]
    }

  };


  let newsCard = data.myNews.cardNews.map((obj, i)=>{

    if(i === 0){

      return(

        
          <div className="news-card col-span-1 laptop:col-span-2" key={i} style={{background: 'url(' + obj.img + ') no-repeat', backgroundSize:'cover'}}>
            <Link to={obj.link}>
              <div className="bg-gradient">
                <div className="content-area">
                  <h3 className="card-title-news" dangerouslySetInnerHTML={{__html: obj.title}}></h3>
                  <p className="card-bodyText-news" dangerouslySetInnerHTML={{__html: obj.shortText}}></p>
                </div>
              </div>
            </Link>
          </div>

      )

    }else{

      return(
 
          <div className="news-card" key={i} style={{background:'url(' + obj.img + ') no-repeat', backgroundSize:'cover'}}>
            <Link to={obj.link}> 
            <div className="bg-gradient">
                <div className="content-area">
                  <h3 className="card-title-news" dangerouslySetInnerHTML={{__html: obj.title}}></h3>
                  <p className="card-bodyText-news" dangerouslySetInnerHTML={{__html: obj.shortText}}></p>
                </div>
            </div>
            </Link>
          </div>
        
        )

    }

  });


  let Questions = data.questions.map((obj, i)=>{

    return(

      <Accordion 
        key={i}
        title={obj.title} 
        bodyText={obj.bodyText}
      />

    )

  });



function Main(){

    return(

        <>

              <FirstBanner
                title={data.FirstBanner.title}
                bodyText={data.FirstBanner.bodyText}
              />
            
              <div className="container-general">



            
                <div className="block">

                  <div className="content_block">

                        <div className="two-block_left">
                          <h2 dangerouslySetInnerHTML={{__html:data.WhatItIsKineziology.title}}></h2>
                        </div>
                        <div className="two-block_right">

                          <p dangerouslySetInnerHTML={{__html:data.WhatItIsKineziology.bodyText}}></p>

                          <Link className="Link" to={data.WhatItIsKineziology.link} dangerouslySetInnerHTML={{__html:data.WhatItIsKineziology.more}}></Link>

                        </div>

                  </div>


                </div>


                <div className="block">

                  <div className="content_block revers">
                    <div className="text_two_block">
                      
                      <h2 dangerouslySetInnerHTML={{__html:data.about.title}}></h2>

                      <p dangerouslySetInnerHTML={{__html:data.about.bodyText}}></p>

                      <Link className="Link" to={data.about.link} dangerouslySetInnerHTML={{__html:data.about.more}}></Link>

                    </div>
                    <div className="img_two_block"></div>
                  </div>


                </div>


                <Card/>


                <div className="block">

                  <div className="content-block-news">
                    <div className="title-news"><h2 dangerouslySetInnerHTML={{__html:data.myNews.title}}></h2></div>

                    <div className="field-card-news">
                     
                      {newsCard}  
                      
                    </div>

                    <div className="more-news"><Link className="Link" to={data.myNews.link} dangerouslySetInnerHTML={{__html:data.myNews.more}}></Link></div>
                  </div>

                </div>



                <div className="block-top">

                <div className="container-questions">
                <h2 dangerouslySetInnerHTML={{__html:"Часто задаваемые вопросы или просто ответы на термены"}}></h2>
                  <div className="question-cards">

                    {Questions}

                  </div>  
                </div>

                </div>




              </div>



        </>        

    );

}

export default Main;