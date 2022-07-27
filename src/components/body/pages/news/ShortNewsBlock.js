import React from "react";
import { Link } from "react-router-dom";

import './ShortNewsBlock.css';

function ShortNewsBlock(props){


    let gradientNewsCard = "linear-gradient(180deg, rgba(42, 46, 59, 0) 0%, #2A2E3B 100%)";

    let data ={
        "title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "textBody":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "date":"00.00.0000",
    }
    
    return(
      <>
      
        <h2 className="adpt_m" dangerouslySetInnerHTML={{__html:'Другие новости'}}></h2>


        <div className="mt-[24px] scroll-pl-3 snap-x ShortNewsBlock">



                   <Link to="#" className="snap-center cardNews" style={{background:gradientNewsCard + ", url('https://images.unsplash.com/photo-1655319492860-9efedabbea98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80') center, center"}}>
                       
                       <div className="cardNewsContent">

                           <div className="cardNewsContentHead">
                               <h2 className="h2-Two-Line" dangerouslySetInnerHTML={{__html:data.title}}></h2>
                               <p className="p-Three-Line" dangerouslySetInnerHTML={{__html:data.textBody}}></p>
                           </div>
                           <p className="text-[#F7F5EF] mt-[16px]" dangerouslySetInnerHTML={{__html:data.date}}></p>

                       </div>

                   </Link>




                   <Link to="#" className="snap-center cardNews" style={{background:gradientNewsCard + ", url('https://images.unsplash.com/photo-1655319492860-9efedabbea98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80') center, center"}}>
                       
                       <div className="cardNewsContent">

                           <div className="cardNewsContentHead">
                               <h2 className="h2-Two-Line" dangerouslySetInnerHTML={{__html:data.title}}></h2>
                               <p className="p-Three-Line" dangerouslySetInnerHTML={{__html:data.textBody}}></p>
                           </div>
                           <p className="text-[#F7F5EF] mt-[16px]" dangerouslySetInnerHTML={{__html:data.date}}></p>

                       </div>

                   </Link>



               
                   <Link to="#" className="snap-center cardNews" style={{background:gradientNewsCard + ", url('https://images.unsplash.com/photo-1655319492860-9efedabbea98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80') center, center"}}>
                       
                       <div className="cardNewsContent">

                           <div className="cardNewsContentHead">
                               <h2 className="h2-Two-Line" dangerouslySetInnerHTML={{__html:data.title}}></h2>
                               <p className="p-Three-Line" dangerouslySetInnerHTML={{__html:data.textBody}}></p>
                           </div>
                           <p className="text-[#F7F5EF] mt-[16px]" dangerouslySetInnerHTML={{__html:data.date}}></p>

                       </div>
                       
                   </Link>

        </div>

        <div className="more_cards mt-[24px] w-full"><Link className="Link" to="#" dangerouslySetInnerHTML={{__html:"Ещё новостей"}}></Link></div>
     </>

    )

}

export default ShortNewsBlock;