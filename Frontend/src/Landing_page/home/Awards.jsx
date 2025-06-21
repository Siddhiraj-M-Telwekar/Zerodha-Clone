import React from 'react'

function Awards(){
    return(
        <div className='container '>
            <div className='row '>
                <div className='col-6 p-5'>
                    <img src='Media/largestBroker.svg' />
                </div>
                <div className='col-6 p-5'>
                    <h1>Largest broker in India</h1>
                    <p className='mb-5'>2+ Million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and interesting in :</p>
                    <div className='row'>
                        <div className='col-6 p-3' >
                            <ul>
                                 <li><p>Feature options</p></li>
                         <li><p>Commodity derivatives</p></li>
                          <li><p>Currency derivatives</p></li>
                            </ul>
                       
                           </div>
                   
                        <div className='col-6 p-3'>
                            <ul>
                                <li><p>Stocks and IPO's</p></li>
                            <li><p>Direct Mutual Fund</p></li>
                             <li><p>Bonds and Government Securities</p></li>
                            </ul>  
                             </div>

                            <img src='Media/pressLogos.png' width={"95%"}/>
                    </div>

                </div>
                
                    
                
            </div>

        </div>
    )
        
    
}

export default Awards;