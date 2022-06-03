import React from "react";

import './WhatItIsKineziology.css';
import TopBanner from "../../../topBanner/topBanner";
import WItIsK from './img/WhatItIsKineziology.png';
import Back from "../../../back/back";

function WhatItIsKineziology(){
    return(
        <>

            <TopBanner
            img={WItIsK}
            />
           
            <div className="container-general">
                <div className="block-top">
                    <Back location='ru'/>

                </div>
            </div>
       
        </>
    );
}

export default WhatItIsKineziology;