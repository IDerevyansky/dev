import React from 'react';
import './callBack.css';

import whatsapp_dark from './img/whatsapp_dark.svg';
import telegram_dark from './img/telegram_dark.svg';
import viber_dark from './img/viber_dark.svg';
import btn_dark from './img/btn_dark.svg';


let numPhone = () => {
    return(

        <div className="block-phone">
            <div className='content-center'><p>или</p></div>
            <div className='content-center'><p className='numPhone'>8 977 414 74 77</p></div>
        </div>

    );
}


function CallBackLarge(props){

    return(

        <div className="content-main">
    
            <div className="contaoner-callback item-end">

                <div className='content-callBack'>
                    <p>Записаться в один клик</p>
                    <div className="Side left">
                        <img className="btn size" src={whatsapp_dark}></img>
                        <img className="btn size" src={telegram_dark}></img>
                        <img className="btn size" src={viber_dark}></img>
                    </div>
                </div>

                <div className="centerLarge"></div>
                <div className='content-callBack'>
                <p>Запись через Email</p>
                    <div className="Side right">
                        <img className="btn size" src={btn_dark}></img>
                    </div>
                </div>

            </div>

            {props.numPhone === 'true'?numPhone():''}

        </div>

    );

}

export default CallBackLarge;