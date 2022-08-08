import React from "react";
import { useParams } from "react-router-dom";
import Back from "../../../back/back";
import Card from "../../../Product_card/Card";
import TopBanner from "../../../topBanner/topBanner";
import product from './img/product.png';


import "./ProductPage.css";


function ProductPage(){

let data = {

        "title":"Title-1  asdasdas das d as dasdasd sadasdas dasd asd d adasdsad  sd ada",
        "description":"Его взгляд снова скользнул к отчужденной, но удивительно милой незнакомке. Девушка все так же стояла в дверях, наблюдая за его сотрудниками. У нее в руках не было бокала. И это нужно исправить. Мужчина опять потер подбородок. Следующей задачей было слияние с компанией «Спорта Ко» и удвоение объема продаж их спортивного оборудования. Разумеется, было весьма рискованно предпринимать этот шаг так быстро, но Рик не мог ждать. Он вкалывал все эти десять лет не для того, чтобы теперь замедлить ход к уже близкой победе. Я хочу поздравить вас всех с успешным завершением нашего дела – проект «Хинни и Смит» закончился очень удачно для всех нас. Теперь мы можем сами доставлять товары во все уголки страны, сокращая расходы и увеличивая прибыль.  – Рик поднял бокал с шампанским. – За замечательную команду с блестящим будущим! Он сделал глоток из бокала под гул всеобщего одобрения.",
        "duration":"<span style='color:#84878C'>Продолжительность: </span>1,5 часа",
        "cost":"<span style='color:#84878C'>Стоимость: </span>5 000 рублей",
        "features":"<span style='color:#84878C'>Особенности: </span>Text",
        "img":"https://images.unsplash.com/photo-1657564793579-9d49d4d7257b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        "link":"Title-1"
   
}



    // console.log(useParams().idPost);

    return(

    <>
            <TopBanner
            img={product}
            />
        
            <div className="container-general">
                <div className="block-top adpt_m">
                    <Back location='ru'/>

                    <div className="container_product">

                        <div className="propduct_img" style={{background:"url('"+ data.img +"') center center"}}>

                        </div>

                        <div className="propduct_content col-span-2">

                            <h2 dangerouslySetInnerHTML={{__html:data.title}}></h2>
                            <p dangerouslySetInnerHTML={{__html:data.description}}></p>

                                <div className="details">

                                    <p dangerouslySetInnerHTML={{__html:data.duration}}></p>
                                    <p dangerouslySetInnerHTML={{__html:data.cost}}></p>
                                    <p dangerouslySetInnerHTML={{__html:data.features}}></p>

                                </div>
                               
                            <div className="product_contacts">
                                Contacts
                            </div>

                        </div>


                    </div>


                </div>

                <Card position={"top"} title={"Ещё темы для работы"}/>

            </div>


    </>
       
    )

}

export default ProductPage;