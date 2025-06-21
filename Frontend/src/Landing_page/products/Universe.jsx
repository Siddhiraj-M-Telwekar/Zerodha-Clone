import React from 'react';

function Universe() {
    return (
        <div className='container text-center mt-5'> 
            <h2 className='mt-4'>The Zerodha Universe</h2>
           <h5 className='mt-4 ' style={{opacity:"90%"}}>Extend your trading and investment experience even further with our partner platforms</h5>
                <div className='row'>
                <div className='col-4 p-3 mt-5' >
                    <a href='' style={{textDecoration:"none"}}>
                        <img src="Media/newLogo/zerodhaFundhouse.png" />
                <p className="text-small text-muted mt-3">
            Our asset management venture <br/>
            that is creating simple and transparent index <br/>
            funds to help you save for your goals.
          </p>
                    </a>
          </div>
          <div className='col-4 p-3 mt-5'>
            <a href=''  style={{textDecoration:"none"}}>
                <img src="Media/newLogo/sensibullLogo.svg" />
          <p className="text-small text-muted mt-3">
            Options trading platform that lets you <br/>
            create strategies, analyze positions, and examine <br/>
            data points like open interest, FII/DII, and more.
          </p>
            </a>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <a href=''  style={{textDecoration:"none"}}>
                        <img src="Media/newLogo/tijori.png" />
          <p className="text-small text-muted mt-3">
            Investment research platform <br/>
            that offers detailed insights on stocks, <br/>
            sectors, supply chains, and more.
            </p>
                    </a>
            </div>
          <div className='col-4 p-3 mt-5'>
            <a href=''  style={{textDecoration:"none"}}>
                <img src="Media/newLogo/streakLogo.png" />
          <p className="text-small text-muted mt-3">
            Systematic trading platform <br/>
            that allows you to create and backtest <br/>
            strategies without coding.
            </p>
            </a>
           </div>
                <div className='col-4 p-3 mt-5'>
                    <a href=''  style={{textDecoration:"none"}}>
                        <img src="Media/smallcaseLogo.png" />
          <p className="text-small text-muted mt-3">
            Thematic investment platform <br/>
            that helps you invest in diversified <br/>
            baskets of stocks on ETFs.
            </p>
                    </a>
                    
          </div>
          <div className='col-4 p-3 mt-5'>
            <a href=''  style={{textDecoration:"none"}}>
                <img src="Media/newLogo/dittoLogo.png" />
          <p className="text-small text-muted mt-3">
            Personalized advice on life <br/>
            and health insurance. No spam <br/>
            and no mis-selling.
            </p>
            </a>    
                </div>
                </div>
                <button className='p-2 mt-5 mb-5 btn btn-primary fs-5' style={{width:"20%",margin:"0 auto"}}>Signup Now</button>

            </div>
        
      );
}

export default Universe;