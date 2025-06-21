import React from 'react'

function Education() {
    return ( 
        <div className='cotainer mt-5'>
            <div className='row'>
                <div className='col mt-5 text-center'>
                    <img src='Media/education.svg' style={{height:"90%",width:'70%'}}/>
                </div>
                <div className='col mt-5'>
                    <h2>Free and open market education</h2>
                    <p>Varsity, the largest online stock market education book in the world<br/>
            covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:'none'}}>Versity <i class="fa-solid fa-arrow-right-long"></i></a>
                    <br/>
                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in<br/>
            India for all your market related queries.</p>
                    <a href='' style={{textDecoration:'none'}}>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;