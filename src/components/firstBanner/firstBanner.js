import React from 'react';
import CallBackLarge from '../callBalck/callBack_large';
import './firstBanner.css';

function FirstBanner(props){
    return(

        <div className="main-container">
                <div className="side Left">
                    <div className="Grad"></div>
                </div>
            <div className="side Right">

                <div className="text-container">
                    <h1 dangerouslySetInnerHTML={{__html:props.title}}></h1>
                    <p dangerouslySetInnerHTML={{__html:props.bodyText}}></p>
                </div>  
            
              <CallBackLarge/>

            </div>
        </div>

    )
}

export default FirstBanner;
