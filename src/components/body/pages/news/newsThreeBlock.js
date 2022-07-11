import React from "react";

function NewsTreeBlock(props){

    let gradientNewsCard = "linear-gradient(180deg, rgba(42, 46, 59, 0) 0%, #2A2E3B 100%)";

    return(
        <>
            <div className="scroll-pl-6 snap-x newsBlock adpt_m">
                <div className="snap-center gardNews block-2-3" style={{background:gradientNewsCard + ", url(https://images.unsplash.com/photo-1603482594758-76e1fee40ff4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80) center, center"}}></div>
                <div className="snap-center gardNews block-1-3"></div>
                <div className="snap-center gardNews block-1-3"></div>
                <div className="snap-center gardNews block-2-3"></div>
                <div className="snap-center gardNews"></div>
                <div className="snap-center gardNews"></div>
                <div className="snap-center gardNews"></div>
            </div>
        </>
    );
}

export default NewsTreeBlock;