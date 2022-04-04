import React from "react";
import { Link } from "react-router-dom";
import CallBackLarge from "../../../callBalck/callBack_large";
import Card from "../../../Product_card/Card";

import './MainV2.css';


let data = {
"card":[
  {
    "id":1,
    "title":"Title1",
    "bodyText":"Он знал всех своих сотрудников – если не по имени, то хотя бы в лицо. Интересно, эта девушка была новой сотрудницей или просто случайно заглянула сюда? Как бы то ни было, он быстро разгадает ее.",
    "link":"111",
  },
  {
    "id":2,
    "title":"Title2",
    "bodyText":"Он знал всех своих сотрудников – если не по имени, то хотя бы в лицо. Интересно, эта девушка была новой сотрудницей или просто случайно заглянула сюда?",
    "link":"222",
  },
  {
    "id":3,
    "title":"Title3",
    "bodyText":"Он знал всех своих сотрудников – если не по имени, то хотя бы в лицо.  Как бы то ни было, он быстро разгадает ее.",
    "link":"333",
  },
  {
    "id":4,
    "title":"Title4",
    "bodyText":"Интересно, эта девушка была новой сотрудницей или просто случайно заглянула сюда? Как бы то ни было, он быстро разгадает ее.",
    "link":"444",
  },
  {
    "id":5,
    "title":"Title5",
    "bodyText":"Он знал всех своих сотрудников – если не по имени, то хотя бы в лицо.",
    "link":"555",
  },
  {
    "id":6,
    "title":"Title6",
    "bodyText":"Он знал всех своих сотрудников – если не по имени, то хотя бы в лицо. Интересно, эта девушка была новой сотрудницей или просто случайно заглянула сюда?",
    "link":"666",
  }
]

};




let Cards = data.card.map((obj, i)=>{

  return(
    <Card 
      key={i} 
      title={obj.title} 
      bodyText={obj.bodyText} 
      link={obj.link}
    /> 
  )

  });



function MainV2(){

    return(

        <>

              <div className="main-container">
                  <div className="side Left">
                      <div className="Grad"></div>
                    </div>
                    <div className="side Right">

                      <div className="text-container">
                        <h1>Вам достаточно знать номер телефона данного человека.</h1>
                        <p>
                          Вам достаточно знать номер телефона данного человека, и вы можете создать 
                          ссылку, которая позволит начать с ним чат. Вам достаточно знать номер 
                          телефона данного человека, и вы можете создать ссылку, которая позволит 
                          начать с ним чат. 
                        </p>
                      </div>  
                    
                      <CallBackLarge/>

                    </div>
              </div>


              <div className="container-general">



            
                <div className="block">

                  <div className="content_block">

                        <div className="two-block_left">
                          <h2>Что нужно знать о кинезиологии</h2>
                        </div>
                        <div className="two-block_right">

                          <p>
                                Он вкалывал все эти десять лет не для того, чтобы теперь замедлить ход к уже близкой победе. 
                                Я хочу поздравить вас всех с успешным завершением нашего дела – проект «Хинни и Смит» 
                                закончился очень удачно для всех нас. Теперь мы можем сами доставлять товары во все уголки 
                                страны, сокращая расходы и увеличивая прибыль.  – Рик поднял бокал с шампанским. 
                                – За замечательную команду с блестящим будущим! Он сделал глоток из бокала под гул всеобщего 
                                одобрения. 
                          </p>

                          <p>
                                Его взгляд снова скользнул к отчужденной, 
                                но удивительно милой незнакомке. Девушка все так же стояла в дверях, 
                                наблюдая за его сотрудниками. У нее в руках не было бокала. И это нужно 
                                исправить. Мужчина опять потер подбородок. Следующей задачей было слияние 
                                с компанией «Спорта Ко» и удвоение объема продаж их спортивного оборудования. 
                                Разумеется, было весьма рискованно предпринимать этот шаг так быстро, 
                                но Рик не мог ждать.
                          </p>

                          <Link className="Link" to="WhatItIsKineziology">Подробнее</Link>
                        </div>

                  </div>


                </div>


                <div className="block">

                  <div className="content_block revers">
                    <div className="text_two_block">
                      
                      <h2>Немного о себе</h2>

                      <p>
                        Его взгляд снова скользнул к отчужденной, 
                        но удивительно милой незнакомке. Девушка все 
                        так же стояла в дверях, наблюдая за его сотрудниками. 
                        У нее в руках не было бокала. И это нужно исправить.Мужчина опять потер 
                        подбородок. Следующей задачей было слияние с компанией 
                        «Спорта Ко» и удвоение объема продаж их спортивного оборудования. 
                      </p>

                      <Link className="Link" to="about">Подробнее</Link>

                    </div>
                    <div className="img_two_block"></div>
                  </div>


                </div>



                <div className="block">


                    <div className="cards-content-block">

                      <div className="title_cards"><h2>Темы для работы</h2></div>
                    
                      <div className="slider-content-block">

                        {Cards}

                      </div>

                      <div className="more_cards"><Link className="Link" to="product">Подробнее</Link></div>

                    </div>
                  

                </div>

                <div className="block">

                <div className="content-block-news">
                  <div className="title-news"><h2>Мои новости</h2></div>

                  <div className="field-card-news">

                          <div className="news-card col-span-1 laptop:col-span-2 " style={{background:'url(https://images.unsplash.com/photo-1504908892453-3cb0b90b5002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=50) no-repeat', backgroundSize:'cover'}}>
                            <div className="bg-gradient">
                              <div className="content-area">
                                <h3 className="card-title-news">Title1</h3>
                                <p className="card-bodyText-news">adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdas</p>
                              </div>
                            </div>
                          </div>

                          <div className="news-card" style={{background:'url(https://images.unsplash.com/photo-1644232448481-a5e82f095196?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=50) no-repeat', backgroundSize:'cover'}}>
                          <div className="bg-gradient">
                              <div className="content-area">
                                <h3 className="card-title-news">Title2</h3>
                                <p className="card-bodyText-news">adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdas</p>
                              </div>
                            </div>
                          </div>

                          <div className="news-card" style={{background:'url(https://images.unsplash.com/photo-1610809027249-86c649feacd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=50) no-repeat', backgroundSize:'cover'}}>
                            <div className="bg-gradient">
                              <div className="content-area">
                                <h3 className="card-title-news">Title3</h3>
                                <p className="card-bodyText-news">adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdas</p>
                              </div>
                            </div>
                          </div>

                          <div className="news-card" style={{background:'url(https://images.unsplash.com/photo-1610555356070-d0efb6505f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=50) no-repeat', backgroundSize:'cover'}}>
                            <div className="bg-gradient">
                              <div className="content-area">
                                <h3 className="card-title-news">Title4</h3>
                                <p className="card-bodyText-news">adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdas</p>
                              </div>
                            </div>
                          </div>

                          <div className="news-card" style={{background:'url(https://images.unsplash.com/photo-1612676239016-41e2c92b8e06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=50) no-repeat', backgroundSize:'cover'}}>
                              <div className="bg-gradient">
                                <div className="content-area">
                                  <h3 className="card-title-news">Title5</h3>
                                  <p className="card-bodyText-news">adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdas adsadas sd sadsad dasda sdasdasd sadasdasdasadsadas sd sadsad dasda sdasdasd sadasdasdas</p>
                                </div>
                            </div>
                          </div>

                  </div>

                  <div className="more-news"><Link className="Link" to="news">Подробнее</Link></div>
                </div>

                </div>



                <div className="block">

                  <div className="container-questions">
                    <h2>Часто задаваемые вопросы или просто ответы на термены</h2>
                    <div className="question-cards">

                      <div className="question-card">
                        <div className="title-and-icon">
                          <h3>Title</h3>
                          <div className="icon_qu-card">X</div>
                        </div>

                        <div className="body_qu-card">
                          <p>Qasdsa dsd sd asdasdasd sdsdsad asd asdsdasdas </p>
                        </div>

                      </div>


                    </div>  
                  </div>

                </div>




              </div>



        </>        

    );

}

export default MainV2;