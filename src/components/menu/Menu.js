import React, { useEffect, useState } from "react";

import './Menu.css';


function Menu(){

    const [iconMenu, setIconMenu] = useState('burger');

    let data = ['item1', 'item2', 'item3', 'item4', 'item5'];

    let items = data.map((item, key, arr)=> <p key={key} className="text-style-items">{item}</p> );

    let toggle = () => {iconMenu == 'burger'?setIconMenu('cross'):setIconMenu('burger');};




    useEffect(()=>{
        
        let interactiveMenu = () => {

            let interactiveItem = document.getElementsByClassName('interactive-item');
            let offset = window.pageYOffset >= 56?true:false;
            interactiveItem[0].style.visibility = offset?'visible':'hidden';
            //Скрыть Items при скроле вниз
            //Показать блок с кнопками при скроле вниз.
            //При клике на гамбургер показать items скрыть блок с кнопками, при клике снова вывести блок скнопками 
            //При скроле к верху страницы тор 0px опять вывести   


        };

        window.addEventListener(  'scroll', () => interactiveMenu() );

    });



    return(

        <div className="menu-container">

            <div className="menu-container-content">

                <div className="logo-container"></div>

                <div className="items-container">

                    {items}

                    <div onClick={toggle} className={iconMenu+" "+"interactive-item"}></div>

                </div>

            </div>   

            <div className="menu-gradient"></div>  

        </div>
       
    );
 
}

export default Menu;
