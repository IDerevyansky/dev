import React from "react";
import Back from "../../../back/back";
import TopBanner from "../../../topBanner/topBanner";


import "./NewsPage.css";
import ShortNewsBlock from "./ShortNewsBlock";


function NewsPage(){

let content = {
    "title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "bodytext":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eu sed massa mattis consectetur eget mi nec est. Lacinia a nam sed et arcu, risus. Ultricies aliquet tristique nulla faucibus nunc quam maecenas interdum. A quis blandit fringilla dolor sagittis, id. Ullamcorper ac diam et venenatis. Dui imperdiet nisl pellentesque semper scelerisque. Dictumst morbi amet, eget semper aliquam diam urna cras libero. Pharetra interdum ultricies orci orci velit quis cursus nibh. Augue vitae, lacus egestas at.<br><br> At magna sed diam scelerisque sollicitudin. Pharetra, odio convallis dictum morbi massa a non. Eros, tempor massa consectetur leo, tincidunt enim ultrices facilisis. In arcu laoreet at orci ut. Ipsum at pulvinar nibh quam interdum senectus. Interdum aliquet augue sagittis a pretium nullam elementum. Tellus sit sed ac adipiscing faucibus. Urna a nulla cras risus egestas fames aliquet vitae feugiat. Sit vitae, id egestas tellus. Pulvinar porttitor quis augue eu condimentum. Duis nunc arcu suspendisse velit. Et rhoncus risus urna aliquet at mus sed. Accumsan suscipit vitae dolor porttitor elementum urna. Donec pretium, curabitur tincidunt libero, sed. Cras sit diam duis sit tortor, duis quis in netus. Netus nulla sit cursus interdum nunc vulputate. Tempor sit orci, ipsum bibendum varius et curabitur bibendum nunc. Ut commodo sapien in nisi netus sagittis at urna. Lacus, rhoncus adipiscing tortor purus integer lectus ut. Vulputate elit gravida scelerisque tortor rhoncus gravida vulputate. Adipiscing lectus malesuada suscipit aliquet metus ac in cras. Risus enim enim pellentesque vitae habitasse mauris feugiat faucibus. Aenean ipsum lorem vel maecenas purus, enim, sed proin. <br><br>Metus aliquet sed a, vel mauris. Tellus feugiat a tincidunt enim morbi et nec velit duis. Leo venenatis cras nibh sed diam vel. Laoreet arcu sed suspendisse amet. Condimentum orci congue praesent dignissim ut. Vel enim at elit vestibulum pellentesque sit quisque dui, in."
};




    return(

    <>
        <TopBanner
        view="news"
        img={"https://images.unsplash.com/photo-1655319492860-9efedabbea98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"}
        />
        <div className="container-general">
            <div className="block-top adpt_m">
                    <Back location='ru'/>

                    <h1 dangerouslySetInnerHTML={{__html:content.title}}></h1>
                    <p className="my-[24px]" dangerouslySetInnerHTML={{__html:content.bodytext}}></p>
           


            </div>

            <div className="block-top">
    


                    <ShortNewsBlock/>
           

           
            </div>

        </div>

    </>

    )

}

export default NewsPage;