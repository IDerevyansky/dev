import React from 'react';
import TopBanner from '../../../topBanner/topBanner';

import './About.css';
import aBout from './img/aBout.png';
import Back from '../../../back/back';


function About(){
    return(

    <>

        <TopBanner
        img={aBout}
        />
       
        <div className="container-general">
            <div className="block-top">
                 <Back location='ru'/>

            </div>
        </div>
   
    </>

    );
}


export default About;