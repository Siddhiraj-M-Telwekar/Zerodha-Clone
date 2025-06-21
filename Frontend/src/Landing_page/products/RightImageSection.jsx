import React from 'react';

function RightImageSection({ imageUrl, productName, productDescription, learnMore,learnMoreStr }) {
    return ( 
        <div className='container mt-2'>
            <div className='row'>
                <div className='col-6 p-5' style={{marginTop:"90px"}}>
                    <h2 className='mt-5 mr-5'  style={{color:"#4d4d33"}}>{productName}</h2>
                    <p className='mr-5' style={{lineHeight:"2",fontSize:"17px",opacity:"90%"}}>{productDescription}</p>
                    <a style={{fontSize:"17px"}} href={learnMore}>{learnMoreStr} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                 <div className='col-6 '>
                    <img src={imageUrl} />
                 </div>
            </div>
        </div>
     );
}

export default RightImageSection;