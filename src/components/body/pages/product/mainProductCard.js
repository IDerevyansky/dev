import React, { useState } from "react";

import './mainProductCard.css';

function MainProductCard(props){


    const [stateAccordion, setStateAccordion] = useState(false);

    let toggle = () => {
        stateAccordion?setStateAccordion(false):setStateAccordion(true);
    }



    return(
        <>
            <div className="containerMainProductCard">
                <div className="titleCard" onClick={() => toggle()}>
                    <h3 className="qu-text-color qu-text" dangerouslySetInnerHTML={{__html:'Fdfgdf dfgdfgdfgd dfgdfgdfg dfg dfgdfgdfgdf dfgfdgdfg fgdfdfgfd dfgdfg fgf fg dfgdgf dfgdfg dfg dfg dfg'}}></h3>
                    <div className={stateAccordion?'icon_qu-card rotate-180 duration-300':'icon_qu-card rotate-0 duration-300'}></div>
                </div>
                <div className={stateAccordion?'visible body_qu-card':'hidden body_qu-card'}>
                    <p className="qu-text-color" dangerouslySetInnerHTML={{__html:'Here product text'}}></p>
                </div>
            </div>
        </>
    );
}

export default MainProductCard;


