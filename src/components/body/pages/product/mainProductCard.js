import React, { useState } from "react";

import './mainProductCard.css';

function MainProductCard(props){

    return(

        <>

            <h1 className="mb-[24px]" dangerouslySetInnerHTML={{__html:"Задница"}}></h1>

                <div className="containerCards">

                    <div className="section sectionOne">
                        <div className="rounded bg-red"></div>
                        <div className="rounded bg-red"></div>
                    </div>

                    <div className="section sectionTwo">
                        <div className="rounded bg-green"></div>
                        <div className="rounded bg-green"></div>
                        <div className="rounded bg-green"></div>
                    </div>

                    <div className="section sectionTree">
                        <div className="rounded bg-grey"></div>
                        <div className="rounded bg-grey"></div>
                        <div className="rounded bg-grey"></div>
                    </div>

                </div>

        </>

    );
}

export default MainProductCard;


