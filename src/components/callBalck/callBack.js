import React from 'react';
import './callBack.css';

import whatsapp_dark from './img/whatsapp_dark.svg';
import telegram_dark from './img/telegram_dark.svg';
import viber_dark from './img/viber_dark.svg';
import btn_dark from './img/btn_dark.svg';


function CallBack(){

    return(
    
        <div className="container-callback">
            <div className="Side left">
                <img className="btn" src={whatsapp_dark}></img>
                <img className="btn" src={telegram_dark}></img>
                <img className="btn" src={viber_dark}></img>
            </div>
            <div className="center"></div>
            <div className="Side right">
                <img className="btn" src={btn_dark}></img>
            </div>
        </div>

    );

}

export default CallBack;