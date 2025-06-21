import React from 'react';

function Hero() {
    return ( 
         <div className='container' >
             <div className='container mt-5 p-5 mb-4 text-center'>
                 <h1 className='mt-4' style={{fontSize:"2.8em",opacity:"80%"}}>Charges</h1>
           <h5 className='mt-4 ' style={{color:"gray"}}>List of all taxes and Charges</h5>
             </div>
             <div className='row row text-center mt-5 p-5 mb-4'>
                <div className="col-4 p-4">
          <img src="Media/pricingEquity.svg" />
          <h4 className="mb-4" style={{opacity:"90%",fontSize:"26px"}}>Free equity delivery</h4>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="Media/intradayTrades.svg" />
          <h4 className="mb-4" style={{opacity:"90%",fontSize:"26px"}}>Intraday and F&O trades</h4>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="Media/pricingEquity.svg" />
          <h4 className="mb-4" style={{opacity:"90%",fontSize:"26px"}}>Free direct MF</h4>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div> 
             
           </div>
        </div>
        
     );
}

export default Hero;