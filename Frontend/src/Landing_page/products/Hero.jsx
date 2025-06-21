import React from 'react';

function Hero() {
    return ( 
        <div className='container text-center mt-5' >
           <h1 className='mt-4' style={{fontSize:"2.8em"}}>Zerodha Products</h1>
           <h5 className='mt-4 ' style={{opacity:"90%"}}>Sleek, modern and intuitive trading platforms</h5>
           <h6 className='mt-4'>Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          </h6>
        </div>
     );
}

export default Hero;