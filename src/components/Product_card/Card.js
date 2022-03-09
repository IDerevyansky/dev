import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";


function Card(props){
    return(
      
        <div className="card">

            <div className="header-block">
        
                <h3 dangerouslySetInnerHTML={{__html:props.title}}></h3>
                <p dangerouslySetInnerHTML={{__html:props.bodyText}}></p>
        
            </div>
        
            <div className="footer-block"><Link className="appointment" to={props.link}>Записаться</Link></div>
  
        </div>

    )
}

export default Card;