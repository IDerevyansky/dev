import React from 'react';
// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './back.css';


function Back(props){

const navigate = useNavigate();

const back = () => navigate(-1);

    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //     document.title = `Вы нажали ${count} раз`;
    //   });


    return(

        <>

            <div onClick={back} className='block-back cursor-pointer'>

                    <div className='back-icon'></div>
                    <p dangerouslySetInnerHTML={{__html:props.location != 'ru'? 'Back' : 'Назад'}}></p>

            </div>
           
        </>
        
    );
}

export default Back;