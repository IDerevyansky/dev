import React from 'react';
import CallBackLarge from '../callBalck/callBack_large';
import './firstBanner.css';

function FirstBanner(){
    return(

        <div className="main-container">
                <div className="side Left">
                    <div className="Grad"></div>
                </div>
            <div className="side Right">

                <div className="text-container">
                    <h1 dangerouslySetInnerHTML={{__html:"Вам достаточно знать номер телефона данного человека."}}></h1>
                    <p dangerouslySetInnerHTML={{__html:"Вам достаточно знать номер телефона данного человека, и вы можете создать ссылку, которая позволит начать с ним чат. Вам достаточно знать номер телефона данного человека, и вы можете создать ссылку, которая позволит начать с ним чат. "}}></p>
                </div>  
            
              <CallBackLarge/>

            </div>
        </div>

    )
}

export default FirstBanner;
