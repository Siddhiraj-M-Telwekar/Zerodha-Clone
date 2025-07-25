import React from 'react'

function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-3'>
                <div className='col-6 p-3' >
                    <h1 className='mb-5'>Trust with confidence</h1>
                    <h3>Customer-first always</h3>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.</p>
                    <h3>No spam or gimmicks</h3>
                    <p className='text-muted'> No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.</p>
                    <h3>The Zerodha universe</h3>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.</p>
                    <h3>Do better with money</h3>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.</p>
                </div>
                <div className='col-6 p-1'>
                    <img src='Media/ecosystem.png' width={'100%'} height={'88%'}/>
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{textDecoration:'none'}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                         <a href='' style={{textDecoration:'none'}}>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>

            </div>
        </div>
     );
}

export default Stats;