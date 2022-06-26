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
            "https://images.unsplash.com/photo-1656248394039-dceee71a24f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            "https://images.unsplash.com/photo-1648737964965-7eda17871196?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            "https://images.unsplash.com/photo-1656143340430-6b215e97357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            "https://images.unsplash.com/photo-1656016552212-a4ba4884d308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
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
        ],
        "mySocialNetwork":"Я в социальных сетях."
    },
    "Education":{
        "title":"Образование",
        "bodyText":"<p>Он вкалывал все эти десять лет не для того, чтобы теперь замедлить ход к уже близкой победе. Я хочу поздравить вас всех с успешным завершением нашего дела – проект «Хинни и Смит» закончился очень удачно для всех нас. Теперь мы можем сами доставлять товары во все уголки страны, сокращая расходы и увеличивая прибыль.  – Рик поднял бокал с шампанским. – За замечательную команду с блестящим будущим! Он сделал глоток из бокала под гул всеобщего одобрения. <br><br>Его взгляд снова скользнул к отчужденной, но удивительно милой незнакомке. Девушка все так же стояла в дверях, наблюдая за его сотрудниками. У нее в руках не было бокала. И это нужно исправить. Мужчина опять потер подбородок. Следующей задачей было слияние с компанией «Спорта Ко» и удвоение объема продаж их спортивного оборудования. Разумеется, было весьма рискованно предпринимать этот шаг так быстро, но Рик не мог ждать.</p>",
        "img":[
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Moscow_State_University_crop.jpg/2560px-Moscow_State_University_crop.jpg"
        ]
    },
    "Dissertation":{
        "title":"Десертация",
        "bodyText":"<p>Он вкалывал все эти десять лет не для того, чтобы теперь замедлить ход к уже близкой победе. Я хочу поздравить вас всех с успешным завершением нашего дела – проект «Хинни и Смит» закончился очень удачно для всех нас. Теперь мы можем сами доставлять товары во все уголки страны, сокращая расходы и увеличивая прибыль.  – Рик поднял бокал с шампанским. – За замечательную команду с блестящим будущим! Он сделал глоток из бокала под гул всеобщего одобрения.<br><br> Его взгляд снова скользнул к отчужденной, но удивительно милой незнакомке. Девушка все так же стояла в дверях, наблюдая за его сотрудниками. У нее в руках не было бокала. И это нужно исправить. Мужчина опять потер подбородок. Следующей задачей было слияние с компанией «Спорта Ко» и удвоение объема продаж их спортивного оборудования. Разумеется, было весьма рискованно предпринимать этот шаг так быстро, но Рик не мог ждать. Он вкалывал все эти десять лет не для того, чтобы теперь замедлить ход к уже близкой победе. Я хочу поздравить вас всех с успешным завершением нашего дела – проект «Хинни и Смит» закончился очень удачно для всех нас. Теперь мы можем сами доставлять товары во все уголки страны, сокращая расходы и увеличивая прибыль.  – Рик поднял бокал с шампанским. – За замечательную команду с блестящим будущим! Он сделал глоток из бокала под гул всеобщего одобрения.<br><br> Его взгляд снова скользнул к отчужденной, но удивительно милой незнакомке. Девушка все так же стояла в дверях, наблюдая за его сотрудниками. У нее в руках не было бокала. И это нужно исправить. Мужчина опять потер подбородок. Следующей задачей было слияние с компанией «Спорта Ко» и удвоение объема продаж их спортивного оборудования. Разумеется, было весьма рискованно предпринимать этот шаг так быстро, но Рик не мог ждать.</p>"
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
                    <h1 dangerouslySetInnerHTML={{__html:data.About.title}}></h1>

                    <div className='content-aBout'>

                        <p dangerouslySetInnerHTML={{__html:data.About.text}}></p>

                        <LilSlider
                            listImg={data.About.img}
                        />

                    </div>

                    <div className='SocialNetwork'>

                        <p dangerouslySetInnerHTML={{__html:data.About.mySocialNetwork}}></p>
                        <div className='icon_social'>

                            <a href={data.About.socialNetwork[0].link} target='_blank'><img src={faceBook}></img></a>
                            <a href={data.About.socialNetwork[1].link} target='_blank'><img src={instagram}></img></a>
                            <a href={data.About.socialNetwork[2].link} target='_blank'><img src={vk}></img></a>

                        </div>

                    </div> 
            </div>

            <div className="container-general bgDarkColor">    
                <div className="block-top adpt_m">
                <h2 dangerouslySetInnerHTML={{__html:data.Education.title}}></h2>
                    <div className='eduaction-block'>
                        <div className='bg-img-edu'>
                            <img className='rounded-md' src={data.Education.img}></img>
                        </div>
                        <div className='cont-edu'>
                            <p dangerouslySetInnerHTML={{__html:data.Education.bodyText}}></p>
                        </div>
                    </div>

                    <h2 className='mb-[24px]' dangerouslySetInnerHTML={{__html:data.Dissertation.title}}></h2>
                    <p dangerouslySetInnerHTML={{__html:data.Dissertation.bodyText}}></p>


                </div>        
            </div>

        </div>
   
    </>

    );
}


export default About;