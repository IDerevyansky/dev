import React from 'react';
import './callBack.css';

import whatsapp_dark from './img/whatsapp_dark.svg';
import telegram_dark from './img/telegram_dark.svg';
import viber_dark from './img/viber_dark.svg';
import btn_dark from './img/btn_dark.svg';


function CallBackLarge(){

    return(
    
        <div className="contaoner-callback item-end">

            <div className='content-callBack'>
                <p>Записаться в один клик</p>
                <div className="Side left">
                    <img className="btn size" src={whatsapp_dark}></img>
                    <img className="btn size" src={telegram_dark}></img>
                    <img className="btn size" src={viber_dark}></img>
                </div>
            </div>

            <div className="center size"></div>
            <div className='content-callBack'>
            <p>Запись через Email</p>
                <div className="Side right">
                    <img className="btn size" src={btn_dark}></img>
                </div>
            </div>

        </div>

    );

}

export default CallBackLarge;