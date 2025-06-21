import React from 'react';

function LeftImageSection({
    imageUrl,
    productName,
    productDescription,
    tryDemo,
    tryDemoStr,
    learnMore,
    learnMorestr,
    googlePlay,
    appStore
}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col mr-5 p-5'>
                    <img src={imageUrl}></img>
                </div>
                <div className='col mt-5'>
                    <h2 className='mt-5 ml-5' style={{color:"#4d4d33"}}>{productName}</h2>
                    <p className='ml-5' style={{lineHeight:"2",fontSize:"17px",opacity:"90%"}}>{productDescription}</p>
                    <div className='ml-5' style={{fontSize:"17px"}}>
                       {tryDemo && tryDemoStr && (
                         <a href={tryDemo}>
                        {tryDemoStr} <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                         </a>
                        )}
  
                    {learnMore && learnMorestr && (
                    <a style={{ marginLeft: "50px" }} href={learnMore}>
                    {learnMorestr} <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                     </a>
                         )} 
                    </div>
                    <div className='mt-5 ml-5'>
                        <a href={googlePlay}><img src='Media/googlePlayBadge.svg' width={"150px"}/></a>
                    <a style={{marginLeft:"20px"}} href={appStore}><img src='Media/appStoreBadge.svg' width={"135px"}/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftImageSection;