import React from "react";

import News from "./News.css";


function SecondBlock(props){

    return(

        <div className="newsItem">

            <h2 className="newsTitle" dangerouslySetInnerHTML={{__html:props.data.title}}></h2>

            <div className="seporator"></div>

            <p className="litleText" dangerouslySetInnerHTML={{__html:props.data.litleText}}></p>

            <p className="font-medium" dangerouslySetInnerHTML={{__html:props.data.date}}></p>
         
        </div>

    )

}

export default SecondBlock;