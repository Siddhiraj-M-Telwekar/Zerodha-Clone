import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 border-top' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <h1>People</h1>
            </div>
            <div className='row p-5 mt-5'>
                <div className='col text-center text-muted'>
                    <img src='/Media/nithinKamath.jpg'height={"42%"} style={{borderRadius:'50%'}}/>
                    <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
                </div>
                <div className='col text-muted' style={{lineHeight:"1.7",fontSize:"17px"}}>
                     <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> /{" "}
            <a href="" style={{textDecoration:"none"}}>Twitter</a>
          </p>
                </div>
            </div>
        </div>
     );
}

export default Team;