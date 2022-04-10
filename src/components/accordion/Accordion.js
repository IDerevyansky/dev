import React from 'react';

import './Accordion.css';


function Accordion(props){

    let state = true;

    return(


          <div className="question-card">
            <div className="title-and-icon">
              <h3 className="qu-text-color qu-text" dangerouslySetInnerHTML={{__html:props.title}}></h3>
              <div className="icon_qu-card"></div>
            </div>

            <div className={"body_qu-card"}>
              <p className="qu-text-color" dangerouslySetInnerHTML={{__html:props.bodyText}}></p>
            </div>

          </div>


    )

}

export default Accordion;