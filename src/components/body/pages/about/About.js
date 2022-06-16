import React from 'react';
import TopBanner from '../../../topBanner/topBanner';

import './About.css';
import aBout from './img/aBout.png';
import Back from '../../../back/back';
import LilSlider from '../../../lil_slider/lilSlider';

import faceBook from './img/facebook.svg';
import instagram from './img/instagram.svg';
import vk from './img/vk.svg';


function About(){

const data = {
    "About":{
        "title":"О себе",
        "text":"Он вкалывал все эти десять лет не для того, чтобы теперь замедлить ход к уже близкой победе. Я хочу поздравить вас всех с успешным завершением нашего дела – проект «Хинни и Смит» закончился очень удачно для всех нас. Теперь мы можем сами доставлять товары во все уголки страны, сокращая расходы и увеличивая прибыль.  – Рик поднял бокал с шампанским. – За замечательную команду с блестящим будущим! Он сделал глоток из бокала под гул всеобщего одобрения. Его взгляд снова скользнул к отчужденной, но удивительно милой незнакомке. Девушка все так же стояла в дверях, наблюдая за его сотрудниками. У нее в руках не было бокала. И это нужно исправить. Мужчина опять потер подбородок. Следующей задачей было слияние с компанией «Спорта Ко» и удвоение объема продаж их спортивного оборудования. Разумеется, было весьма рискованно предпринимать этот шаг так быстро, но Рик не мог ждать. Он вкалывал все эти десять лет не для того, чтобы теперь замедлить ход к уже близкой победе. Я хочу поздравить вас всех с успешным завершением нашего дела – проект «Хинни и Смит» закончился очень удачно для всех нас. Теперь мы можем сами доставлять товары во все уголки страны, сокращая расходы и увеличивая прибыль.  – Рик поднял бокал с шампанским. – За замечательную команду с блестящим будущим! Он сделал глоток из бокала под гул всеобщего одобрения.",
        "img":[
            "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
            "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
            "https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
            "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
        ],
        "socialNetwork":[
            {
                "name":"FaceBook",
                "link":"www.facebook.com/#"
            },
            {
                "name":"Instagram",
                "link":"www.instagram.com/#"
            },
            {
                "name":"vk",
                "link":"www.vk.com/#"
            }
        ]
    }
};






    return(

    <>

        <TopBanner
        img={aBout}
        />
       
        <div className="container-general">
            <div className="block-top adpt_m">
                    <Back location='ru'/>
                    <h1>{data.About.title}</h1>

                    <div className='content-aBout'>

                        <p>
                            {data.About.text}
                        </p>

                        <LilSlider
                            listImg={data.About.img}
                        />

                    </div>

                    <div className='SocialNetwork'>

                        <p>Я в социальных сетях.</p>
                        <div className='icon_social'>

                            <img src={faceBook}></img>
                            <img src={instagram}></img>
                            <img src={vk}></img>
                            
                        </div>

                    </div> 
            </div>
        </div>
   
    </>

    );
}


export default About;