import React from 'react';
import './topBanner.css';

function TopBanner(props){
    return(


    <div 
        className="top-banner" 
        style={{backgroundImage:'url('+props.img+')'}}
    >

    </div>
    

    )
}

export default TopBanner;
