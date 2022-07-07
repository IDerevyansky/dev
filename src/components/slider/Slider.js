import React, { useEffect, useState } from "react";

import "./Slider.css";

function Slider(props){

    let [slide, setSlide] = useState(props.date[0]);

    let num = 0;
    let toggle_slide = (q) => {

        if(q=='forward'){
            num>=props.date.length-1?num=0:num++;
        }else{
            num<=0?num=props.date.length-1:num--;
        }
        console.log(props.date[num]);
        setSlide(props.date[num]);
    }


    return(

    <div className='container-slider'>
                        
        <div className="slederImg" style={{backgroundImage: "url("+slide.urlImg+")"}}>

           <div className='navigateBox'>
                <div className='btnNav rotate-0' onClick={()=>toggle_slide('backward')}></div>
                <div className='btnNav rotate-180' onClick={()=>toggle_slide('forward')}></div>
           </div>

        </div>

        <div className='contenText'>dfsdfsd</div>

    </div>


    );
}

export default Slider;