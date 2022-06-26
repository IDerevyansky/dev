import React from "react";

import './WhatItIsKineziology.css';
import TopBanner from "../../../topBanner/topBanner";
import WItIsK from './img/WhatItIsKineziology.png';
import Back from "../../../back/back";

function WhatItIsKineziology(){

let data = {
    "h1":"Что нужно знать о кинезиологии",
    "p":"-"
};




    return(
        <>

            <TopBanner
            img={WItIsK}
            />
           
            <div className="container-general">
                <div className="block-top adpt_m red">
                    <Back location='ru'/>
                   <h1 className="mb-[24px]">czxczxczxczx</h1>
                   <p>sdfdfsdfsdfsdfs</p>

                </div>
            </div>
       
        </>
    );
}

export default WhatItIsKineziology;
