import React from "react";

import './WhatItIsKineziology.css';
import TopBanner from "../../../topBanner/topBanner";
import WItIsK from './img/WhatItIsKineziology.png';

function WhatItIsKineziology(){
    return(
        <>

            <TopBanner
            img={WItIsK}
            />
           
            <div className="container-general">
                <div className="block">

                </div>
            </div>
       
        </>
    );
}

export default WhatItIsKineziology;