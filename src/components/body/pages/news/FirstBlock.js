import React from "react";
import { Link } from "react-router-dom";

function FirstBlock(props){

    let gradientNewsCard = "linear-gradient(180deg, rgba(42, 46, 59, 0) 0%, #2A2E3B 100%)";

    return(

        <>
        
            <div className="scroll-pl-6 snap-x newsBlock adpt_m">
            

           
                
                   
                 <Link to={props.data[0].link} className="snap-center cardNews block-2-3" style={{background:gradientNewsCard + ", url(" + props.data[0].img + ") center, center"}}>
                   
                    <div className="cardNewsContent">

                            <div className="cardNewsContentHead">
                                <h2 className="h2-Two-Line" dangerouslySetInnerHTML={{__html:props.data[0].title }}></h2>
                                <p className="p-Three-Line" dangerouslySetInnerHTML={{__html:props.data[0].litleText}}></p>
                            </div>
                            <p className="text-[#F7F5EF]" dangerouslySetInnerHTML={{__html:props.data[0].date}}></p>

                    </div>

                </Link>

            

               
                <Link to={props.data[1].link} className="snap-center cardNews block-1-3" style={{background:gradientNewsCard + ", url("+ props.data[1].img +") center, center"}}>
                   
                    <div className="cardNewsContent">

                        <div className="cardNewsContentHead">
                            <h2 className="h2-Two-Line" dangerouslySetInnerHTML={{__html:props.data[1].title}}></h2>
                            <p className="p-Three-Line" dangerouslySetInnerHTML={{__html:props.data[1].litleText}}></p>
                        </div>
                        <p className="text-[#F7F5EF]" dangerouslySetInnerHTML={{__html:props.data[1].date}}></p>

                    </div>

                </Link>
                


                <Link to={props.data[2].link} className="snap-center cardNews block-1-3" style={{background:gradientNewsCard + ", url("+ props.data[2].img +") center, center"}}>
                        
                    <div className="cardNewsContent">

                        <div className="cardNewsContentHead">
                            <h2 className="h2-Two-Line" dangerouslySetInnerHTML={{__html:props.data[2].title}}></h2>
                            <p className="p-Three-Line" dangerouslySetInnerHTML={{__html:props.data[2].litleText}}></p>
                        </div>
                        <p className="text-[#F7F5EF]" dangerouslySetInnerHTML={{__html:props.data[2].date}}></p>

                    </div>
                        
                </Link>
               



                
                <Link to={props.data[3].link} className="snap-center cardNews block-2-3" style={{background:gradientNewsCard + ", url("+ props.data[3].img +") center, center"}}>
                       
                    <div className="cardNewsContent">

                        <div className="cardNewsContentHead">
                            <h2 className="h2-Two-Line" dangerouslySetInnerHTML={{__html:props.data[3].title}}></h2>
                            <p className="p-Three-Line" dangerouslySetInnerHTML={{__html:props.data[3].litleText}}></p>
                        </div>
                        <p className="text-[#F7F5EF]" dangerouslySetInnerHTML={{__html:props.data[3].date}}></p>

                    </div>
   
                </Link>
                




                    <Link to={props.data[4].link} className="snap-center cardNews" style={{background:gradientNewsCard + ", url("+ props.data[4].img +") center, center"}}>
                       
                        <div className="cardNewsContent">

                            <div className="cardNewsContentHead">
                                <h2 className="h2-Two-Line" dangerouslySetInnerHTML={{__html:props.data[4].title}}></h2>
                                <p className="p-Three-Line" dangerouslySetInnerHTML={{__html:props.data[4].litleText}}></p>
                            </div>
                            <p className="text-[#F7F5EF]" dangerouslySetInnerHTML={{__html:props.data[4].date}}></p>

                        </div>

                    </Link>





                    <Link to={props.data[5].link} className="snap-center cardNews" style={{background:gradientNewsCard + ", url("+ props.data[5].img +") center, center"}}>
                        
                        <div className="cardNewsContent">

                            <div className="cardNewsContentHead">
                                <h2 className="h2-Two-Line" dangerouslySetInnerHTML={{__html:props.data[5].title}}></h2>
                                <p className="p-Three-Line" dangerouslySetInnerHTML={{__html:props.data[5].litleText}}></p>
                            </div>
                            <p className="text-[#F7F5EF]" dangerouslySetInnerHTML={{__html:props.data[5].date}}></p>

                        </div>

                    </Link>




                
                    <Link to={props.data[6].link} className="snap-center cardNews" style={{background:gradientNewsCard + ", url("+ props.data[6].img +") center, center"}}>
                        
                        <div className="cardNewsContent">

                            <div className="cardNewsContentHead">
                                <h2 className="h2-Two-Line" dangerouslySetInnerHTML={{__html:props.data[6].title}}></h2>
                                <p className="p-Three-Line" dangerouslySetInnerHTML={{__html:props.data[6].litleText}}></p>
                            </div>
                            <p className="text-[#F7F5EF]" dangerouslySetInnerHTML={{__html:props.data[6].date}}></p>

                        </div>
                        
                    </Link>



            </div>
        </>

    );
}

export default FirstBlock;