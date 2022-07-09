import React, { useEffect, useState } from "react";

import "./Slider.css";

function Slider(props){

    let [count, setCount] = useState(0);

    
    return(


    <div className='container-slider'>
                        
        <div className="slederImg" style={{backgroundImage: "url("+props.date[count].urlImg+")"}}>

            <div className='navigateBox'>
                    <div className='btnNav rotate-0' onClick={()=>setCount(count<=0?count=props.date.length-1:--count)}></div>
                    <div className='btnNav rotate-180' onClick={()=>setCount(count>=props.date.length-1?count=0:++count)}></div>
            </div>

        </div>

        <div className='contenText' >
            <h3  className='mb-[8px]' dangerouslySetInnerHTML={{__html:props.date[count].description.title}}></h3>
            <p dangerouslySetInnerHTML={{__html:props.date[count].description.text}}></p>
        </div>

    </div>



    );
}

export default Slider;