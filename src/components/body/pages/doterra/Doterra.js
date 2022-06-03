import React from "react";

import './Doterra.css';
import TopBanner from "../../../topBanner/topBanner";
// import WItIsK from './img/WhatItIsKineziology.png';
import Back from "../../../back/back";


function Doterra() {
    return(

        <>

            <TopBanner
            img="https://www.doterra.com/medias/june-content-card-birch-grad.jpg?context=bWFzdGVyfHJvb3R8MTE1NjU5fGltYWdlL2pwZWd8aGRkL2g1YS8yODMxMTA2NjI0NzE5OC5qcGd8NzdjYWExZmMxOTYzNzdjOTIxM2M3MmNhNzY3ODhjMDE2YjYzNWMwZGRlYWRmN2ZmOWU4MDc1MzFmMWM5ZTU0YQ"
            />
        
            <div className="container-general">
                <div className="block-top">
                    <Back location='ru'/>

                </div>
            </div>
    
        </>
    
    );
}

export default Doterra;