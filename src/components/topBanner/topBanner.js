import React from 'react';
import './topBanner.css';

function TopBanner(props){
    return(


    <div 
        className={props.view == 'news'?"newsPage-top-banner":"top-banner"} 
        style={{backgroundImage:'url('+props.img+')'}}
    >

    </div>
    

    )
}

export default TopBanner;
