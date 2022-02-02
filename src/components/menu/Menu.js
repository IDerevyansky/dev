import React, { useEffect, useState } from "react";
import CallBack from "../callBalck/callBack";
import { Link } from "react-router-dom";

import './Menu.css';


function Menu(){

    const [iconMenu, setIconMenu] = useState('burger');
    const [visibleMenu, setVisibleMenu] = useState('menu_hidden');
    const [BlurOffset, setBlurOffset] = useState(0);

    let data = [{name:"Обо мне", link:"about"}, {name:"Кинезиология", link:"WhatItIsKineziology"}, {name:"Продукты", link:"product"}, {name:"Масла Doterra", link:"doterra"},{name:"Новости", link:"news"}];
    let items = data.map((item, key, arr) => <Link key={key} onClick={() => toggle()} to={item.link} className="text-style-items">{item.name}</Link> );

    let toggle = () => {

        if(iconMenu === 'burger'){
            setIconMenu('cross');
            setVisibleMenu('menu_visible');
            // setBlurOffset(window.scrollY || document.documentElement.scrollTop)
            // document.body.style.position = 'fixed';
        }else{
            setIconMenu('burger');
            setVisibleMenu('menu_hidden');
            // document.body.style.position = 'relative';
        }

    };







    useEffect(()=>{
        
        let memory = 0;

        let contentBlock = document.getElementsByClassName('content-block');
        let btnBlock = document.getElementsByClassName('btn-block');

        contentBlock[0].style.display = 'flex';
        btnBlock[0].style.display = 'none';


        let OffsetMenu = () => {

            // let interactiveItem = document.getElementsByClassName('interactive-item');
            // interactiveItem[0].style.visibility = offset?'visible':'hidden';

            let offset = window.scrollY || document.documentElement.scrollTop;


            if(offset > 0 && memory <= offset){
                memory = offset;
                // console.log('Down');
                // menuContainer[0].style.top = memory;
                // menuContainer[0].style.position = 'fixed';
                contentBlock[0].style.display = 'none';
                btnBlock[0].style.display = 'flex';

            }else{
                memory = offset;
                // console.log('Up');
                // menuContainer[0].style.top = memory;
                // menuContainer[0].style.position = 'fixed';
                contentBlock[0].style.display = 'flex';
                btnBlock[0].style.display = 'none';

            }


        };

        window.addEventListener( 'scroll', () => OffsetMenu() );

    });



    return(

        <>

            <div className="menu-container">

                <div className="menu-container-content">

                    <Link to='/'><div className="logo-container"></div></Link> 
                    
                    <div className="items-content">

                        <div className="items-container content-block">

                            {items}

                        </div>

                        <div className="items-container btn-block">

                            <CallBack/>

                        </div>  

                    </div>

            

                </div>   

                <div className="menu-gradient"></div>  

            </div>









        <div onClick={() => toggle()} className={visibleMenu+" "+"blurBox"}></div>

            <div className="container-mobile_menu">

                <div className="box_mobile_menu">

                    <div className={visibleMenu+" "+"mobile_items-content shadow"}>

                        {items}

                    </div>   

                    <div className="footer_mobile_menu">

                        <div className={visibleMenu+" "+"button shadow"}>Записаться</div>
                        <div onClick={() => toggle()} className={iconMenu+" "+"mobile_menu shadow"}></div>

                    </div>
                    
                </div>

            </div>










        </>
       
    );
 
}

export default Menu;
