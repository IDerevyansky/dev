import React from "react";
import Back from "../../../back/back";
import TopBanner from "../../../topBanner/topBanner";


import "./NewsPage.css";


function NewsPage(){

    return(

    <>
        <TopBanner
        view="news"
        img={"https://images.unsplash.com/photo-1655319492860-9efedabbea98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"}
        />
        <div className="container-general">
            <div className="block-top adpt_m">
                    <Back location='ru'/>

                    <h1 dangerouslySetInnerHTML={{__html:"qweqweqweqw weqweqw wqe qewqweq weqweqwe qwe qweqweqweqw weqweqw wqe qewqweq weqweqwe qwe"}}></h1>
                    <p className="my-[24px]" dangerouslySetInnerHTML={{__html:"adasd asd sdas adsad dasd ads dasdasd sdasdasd asdasd asd dasdasd adasd asd sdas adsad dasd ads dasdasd sdasdasd asdasd asd dasdasd adasd asd sdas adsad dasd ads dasdasd sdasdasd asdasd asd dasdasd adasd asd sdas adsad dasd ads dasdasd sdasdasd asdasd asd dasdasd"}}></p>
           
            </div>
        </div>

    </>

    )

}

export default NewsPage;