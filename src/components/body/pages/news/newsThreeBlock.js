import React from "react";

function NewsTreeBlock(props){

    let gradientNewsCard = "linear-gradient(180deg, rgba(42, 46, 59, 0) 0%, #2A2E3B 100%)";

    let newsContent = props.data.map((q, w, e)=>{
        console.log(q);
    });

    return(

        <>
            <div className="scroll-pl-6 snap-x newsBlock adpt_m">



                <div className="snap-center cardNews block-2-3" style={{background:gradientNewsCard + ", url(https://images.unsplash.com/photo-1603482594758-76e1fee40ff4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80) center, center"}}>
                
                    <div className="cardNewsContent">

                        <div className="cardNewsContentHead">
                            <h2 className="h2-Two-Line" dangerouslySetInnerHTML={{__html:"Title wery loooong"}}></h2>
                            <p className="p-Three-Line" dangerouslySetInnerHTML={{__html:"Text text text text text text text text text text"}}></p>
                        </div>
                        <p className="text-[#F7F5EF]" dangerouslySetInnerHTML={{__html:"12.07.2022"}}></p>

                    </div>

                </div>



                <div className="snap-center cardNews block-1-3" style={{background:gradientNewsCard + ", url(https://images.unsplash.com/photo-1603482594758-76e1fee40ff4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80) center, center"}}>

                    <div className="cardNewsContent">

                        <div className="cardNewsContentHead">
                            <h2 className="h2-Two-Line" dangerouslySetInnerHTML={{__html:"Title wery loooong"}}></h2>
                            <p className="p-Three-Line" dangerouslySetInnerHTML={{__html:"Text text text text text text text text text text"}}></p>
                        </div>
                        <p className="text-[#F7F5EF]" dangerouslySetInnerHTML={{__html:"12.07.2022"}}></p>

                    </div>

                </div>



                <div className="snap-center cardNews block-1-3" style={{background:gradientNewsCard + ", url(https://images.unsplash.com/photo-1603482594758-76e1fee40ff4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80) center, center"}}>

                    <div className="cardNewsContent">

                        <div className="cardNewsContentHead">
                            <h2 className="h2-Two-Line" dangerouslySetInnerHTML={{__html:"Title wery loooong"}}></h2>
                            <p className="p-Three-Line" dangerouslySetInnerHTML={{__html:"Text text text text text text text text text text"}}></p>
                        </div>
                        <p className="text-[#F7F5EF]" dangerouslySetInnerHTML={{__html:"12.07.2022"}}></p>

                    </div>

                </div>



                <div className="snap-center cardNews block-2-3" style={{background:gradientNewsCard + ", url(https://images.unsplash.com/photo-1603482594758-76e1fee40ff4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80) center, center"}}>

                    <div className="cardNewsContent">

                        <div className="cardNewsContentHead">
                            <h2 className="h2-Two-Line" dangerouslySetInnerHTML={{__html:"Title wery loooong"}}></h2>
                            <p className="p-Three-Line" dangerouslySetInnerHTML={{__html:"Text text text text text text text text text text"}}></p>
                        </div>
                        <p className="text-[#F7F5EF]" dangerouslySetInnerHTML={{__html:"12.07.2022"}}></p>

                    </div>

                </div>



                <div className="snap-center cardNews" style={{background:gradientNewsCard + ", url(https://images.unsplash.com/photo-1603482594758-76e1fee40ff4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80) center, center"}}>

                    <div className="cardNewsContent">

                        <div className="cardNewsContentHead">
                            <h2 className="h2-Two-Line" dangerouslySetInnerHTML={{__html:"Title wery loooong"}}></h2>
                            <p className="p-Three-Line" dangerouslySetInnerHTML={{__html:"Text text text text text text text text text text"}}></p>
                        </div>
                        <p className="text-[#F7F5EF]" dangerouslySetInnerHTML={{__html:"12.07.2022"}}></p>

                    </div>

                </div>



                <div className="snap-center cardNews" style={{background:gradientNewsCard + ", url(https://images.unsplash.com/photo-1603482594758-76e1fee40ff4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80) center, center"}}>

                    <div className="cardNewsContent">

                        <div className="cardNewsContentHead">
                            <h2 className="h2-Two-Line" dangerouslySetInnerHTML={{__html:"Title wery loooong"}}></h2>
                            <p className="p-Three-Line" dangerouslySetInnerHTML={{__html:"Text text text text text text text text text text"}}></p>
                        </div>
                        <p className="text-[#F7F5EF]" dangerouslySetInnerHTML={{__html:"12.07.2022"}}></p>

                    </div>

                </div>



                <div className="snap-center cardNews" style={{background:gradientNewsCard + ", url(https://images.unsplash.com/photo-1603482594758-76e1fee40ff4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80) center, center"}}>

                    <div className="cardNewsContent">

                        <div className="cardNewsContentHead">
                            <h2 className="h2-Two-Line" dangerouslySetInnerHTML={{__html:"Title wery loooong"}}></h2>
                            <p className="p-Three-Line" dangerouslySetInnerHTML={{__html:"Text text text text text text text text text text"}}></p>
                        </div>
                        <p className="text-[#F7F5EF]" dangerouslySetInnerHTML={{__html:"12.07.2022"}}></p>

                    </div>

                </div>


            </div>
        </>

    );
}

export default NewsTreeBlock;