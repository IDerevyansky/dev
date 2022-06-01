import React from 'react';

import './back.css';

function Back(props){
    return(

        <>

            <div className='block-back'>

                    <div className='back-icon'></div>
                    <p>{props.location != 'ru'? 'Back' : 'Назад'}</p>

            </div>
           
        </>
        
    );
}

export default Back;