import React from "react";
import { Link } from "react-router-dom";

import './ShortNewsBlock.css';

function ShortNewsBlock(){


    let gradientNewsCard = "linear-gradient(180deg, rgba(42, 46, 59, 0) 0%, #2A2E3B 100%)";

    let data =[

        {
            "title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "date":"00.00.0000",
            "link":"/news/postNumber1",
            "img":"https://images.unsplash.com/photo-1657070174122-a67784501817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80"
        },
        {
            "title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "date":"00.00.0000",
            "link":"/news/postNumber1",
            "img":"https://images.unsplash.com/photo-1616398642917-fee2b30a49b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },
        {
            "title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "date":"00.00.0000",
            "link":"/news/postNumber1",
            "img":"https://images.unsplash.com/photo-1657311388556-eeff862b3471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        }
        
    ];


    let cardNews = data.map((item, index)=>{

        return(

            <Link key={index} to={item.link} className="snap-center cardNews" style={{background:gradientNewsCard + ", url('"+item.img+"') center, center"}}>
                       
                <div className="cardNewsContent">

                    <div className="cardNewsContentHead">
                        <h2 className="h2-Two-Line" dangerouslySetInnerHTML={{__html:item.title}}></h2>
                        <p className="p-Three-Line" dangerouslySetInnerHTML={{__html:item.description}}></p>
                    </div>
                    <p className="text-[#F7F5EF] mt-[16px]" dangerouslySetInnerHTML={{__html:item.date}}></p>

                </div>

            </Link>

        )

    });

    
    return(
      <>
      
        <h2 className="adpt_m" dangerouslySetInnerHTML={{__html:'Другие новости'}}></h2>


            <div className="mt-[24px] scroll-pl-3 snap-x ShortNewsBlock">


                    {cardNews}


            </div>

        <div className="more_cards mt-[24px] w-full"><Link className="Link" to="/news" dangerouslySetInnerHTML={{__html:"Ещё новостей"}}></Link></div>
     </>

    )

}

export default ShortNewsBlock;