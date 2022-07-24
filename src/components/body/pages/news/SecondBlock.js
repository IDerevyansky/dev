import React from "react";
import { Link } from "react-router-dom";

import News from "./News.css";


function SecondBlock(props){

    return(

        <Link to={props.data.link} className="newsItem">

            <h2 className="newsTitle" dangerouslySetInnerHTML={{__html:props.data.title}}></h2>

            <div className="seporator"></div>

            <p className="litleText" dangerouslySetInnerHTML={{__html:props.data.litleText}}></p>

            <p className="font-medium" dangerouslySetInnerHTML={{__html:props.data.date}}></p>

        </Link>

    )

}

export default SecondBlock;