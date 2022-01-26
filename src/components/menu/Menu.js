import React, { useEffect, useState } from "react";

import './Menu.css';


function Menu(){

    const [iconMenu, setIconMenu] = useState('burger');

    let data = ['item1', 'item2', 'item3', 'item4', 'item5'];
    let items = data.map((item, key, arr) => <p key={key} className="text-style-items">{item}</p> );

    // let toggle = () => {iconMenu == 'burger'?setIconMenu('cross'):setIconMenu('burger')};
   

    let toggle = () => {

        if(iconMenu === 'burger'){
            setIconMenu('cross');
            // setItem_(items);
        }else{
            setIconMenu('burger');
            // setItem_(btnBlock);
        }

    }


    useEffect(()=>{
        
        let memory = 0;

        let menuContainer = document.getElementsByClassName('menu-container');
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
                menuContainer[0].style.top = memory;
                menuContainer[0].style.position = 'fixed';
                contentBlock[0].style.display = 'none';
                btnBlock[0].style.display = 'flex';

            }else{
                memory = offset;
                // console.log('Up');
                menuContainer[0].style.top = memory;
                menuContainer[0].style.position = 'fixed';
                contentBlock[0].style.display = 'flex';
                btnBlock[0].style.display = 'none';

            }


        };

        window.addEventListener( 'scroll', () => OffsetMenu() );

    });



    return(

        <div className="menu-container">

            <div className="menu-container-content">

                <div className="logo-container"></div>

                <div className="items-content">

                    <div className="items-container content-block">

                        {items}

                    </div>

                    <div className="items-container btn-block">

                        {'btn'}

                    </div>  

                </div>

        

            </div>   

            <div className="menu-gradient"></div>  

        </div>
       
    );
 
}

export default Menu;
