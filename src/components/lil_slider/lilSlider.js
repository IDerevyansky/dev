import React from 'react';

import './lilSlider.css';


function LilSlider(props){

const ListImg = props.listImg.map((item,i)=>{
    return(
        <div key={i} className='img-container'>
            <img src={item} />
        </div>
    )
});


    return(
       
        <div className='lil-slider'>

            {ListImg}

         </div>

    );
}

export default LilSlider;