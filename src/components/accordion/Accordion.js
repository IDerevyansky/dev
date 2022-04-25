import React, { useState } from 'react';

import './Accordion.css';



function Accordion(props){

    const [stateAccordion, setStateAccordion] = useState(false);

    let toggle = () => {
        stateAccordion?setStateAccordion(false):setStateAccordion(true);
    }

    return(


          <div className="question-card">
            <div className="title-and-icon" onClick={() => toggle()}>
              <h3 className="qu-text-color qu-text" dangerouslySetInnerHTML={{__html:props.title}}></h3>
              <div className={stateAccordion?'icon_qu-card rotate-180 duration-300':'icon_qu-card rotate-0 duration-300'}></div>
            </div>

            <div className={stateAccordion?'visible body_qu-card':'hidden body_qu-card'}>
              <p className="qu-text-color" dangerouslySetInnerHTML={{__html:props.bodyText}}></p>
            </div>

          </div>


    )

}

export default Accordion;