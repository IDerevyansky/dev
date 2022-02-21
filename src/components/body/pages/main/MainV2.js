import React from "react";
import CallBackLarge from "../../../callBalck/callBack_large";

import './MainV2.css';

function MainV2(){

    return(

        <div className="main-container">
            <div className="side Left">
                <div className="Grad"></div>
              </div>
              <div className="side Right">

                <div className="text-container">
                  <h1>Вам достаточно знать номер телефона данного человека.</h1>
                  <p>
                    Вам достаточно знать номер телефона данного человека, и вы можете создать 
                    ссылку, которая позволит начать с ним чат. Вам достаточно знать номер 
                    телефона данного человека, и вы можете создать ссылку, которая позволит 
                    начать с ним чат. 
                  </p>
                </div>  
              
                <CallBackLarge/>
              </div>
        </div>

    );

}

export default MainV2;