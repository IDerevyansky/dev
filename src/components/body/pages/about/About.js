import React from 'react';
import TopBanner from '../../../topBanner/topBanner';

import './About.css';
import aBout from './img/aBout.png';


function About(){
    return(
        
    <>

        <TopBanner
        img={aBout}
        />
       
        <div className="container-general">
            <div className="block">

            </div>
        </div>
   
    </>

    );
}


export default About;