import React from 'react';
import './createTicket.css';

function CreateTicket() {
    return ( 
        <div className='container'>
            <h4 className='text-muted mb-4' style={{fontWeight:"20px"}}>To create a ticket, select a relevant topic</h4>
            <div className='row mt-5'>
                <div className='suhero col-4'>
                        <p className='mb-3' style={{fontSize:"20px"}}>
                            <i class="fa-solid fa-circle-plus"></i> Account Opening</p> 
                    
                <a href="">Resident individual</a>
                <br />
                <a href="">Minor</a>
                <br />
                <a href="">Non Resident Indian (NRI)</a>
                <br />
                <a href="">Company, Partnership, HUF and LLP</a>
                <br />
                <a href="">Glossary</a>
                <br />
                </div>
                <div className='suhero col-4'>
                    <p className='mb-3' style={{fontSize:"20px"}}><i class="fa-regular fa-user"></i>  Your Zerodha Account</p> 
                    
                <a href="">Your Profile</a>
                <br />
                <a href="">Account modification</a>
                <br />
                <a href="">Client Master Report (CMR) and Depository Participant (DP)</a>
                <br />
                <a href="">Nomination</a>
                <br />
                <a href="">Transfer and conversion of securities</a>
                <br />
                </div>
                 <div className='suhero col-4'>
                     <p className='mb-3' style={{fontSize:"20px"}}><i class="fa-solid fa-chart-simple"></i> Kite</p> 
                    
                <a href="">IPO</a>
                <br />
                <a href="">Trading FAQs</a>
                <br />
                <a href="">Margin Trading Facility (MTF) and Margins</a>
                <br />
                <a href="">Charts and orders</a>
                <br />
                <a href="">Alerts and Nudges</a>
                <br />
                <a href="">General</a>
                <br />
                 </div>
            </div>

                <div className='row mt-5'>
                <div className='suhero col-4'>
                    <p className='mb-3' style={{fontSize:"20px"}}><i class="fa-solid fa-wallet"></i> Funds</p> 
                    
                <a href="">Add money</a>
                <br />
                <a href="">Withdraw money</a>
                <br />
                <a href="">Add bank accounts</a>
                <br />
                <a href="">eMandates</a>
                <br />
                </div>
                <div className='suhero col-4'>
                    <p className='mb-3' style={{fontSize:"20px"}}><i class="fa-solid fa-address-book"></i> Console</p> 
                     <a href="">Portfolio</a>
                <br />
                <a href="">Corporate actions</a>
                <br />
                <a href="">Funds statement</a>
                <br />
                <a href="">Reports</a>
                <br />
                <a href="">Profile</a>
                <br />
                <a href="">Segments</a>
                <br />
                </div>
                <div className='suhero col-4'>
                    <p className='mb-3' style={{fontSize:"20px"}}><i class="fa-solid fa-money-check"></i> Coin</p> 
                    
                <a href="">Understanding mutual funds and Coin</a>
                <br />
                <a href="">Coin app</a>
                <br />
                <a href="">Coin web</a>
                <br />
                <a href="">Transactions and reports</a>
                <br />
                <a href="">National Pension Scheme (NPS)</a>
                <br />
                </div>
            </div>
            </div>
           
     );
}

export default CreateTicket;