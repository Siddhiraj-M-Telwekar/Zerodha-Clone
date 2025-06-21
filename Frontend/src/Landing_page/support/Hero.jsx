 import React from 'react';
 

 function Hero() {
    return ( 
       <div className='container-fluid mb-5' style={{height:"450px",backgroundColor:'#1a75ff', color:"white"}}>
        <div className='row mt-4' style={{marginLeft:"200px" ,marginRight:"200px"}}>
            <div className='col-6 text-left mt-5'>
                <h4 className='mb-5'>Support Portal</h4>
                <p className="mb-4" style={{fontSize:"25px"}}>Search for an answer or browse help topics to create a ticket</p>
                <input className="p-2 mb-3 " style={{width:"450px",height:"60px",border:'none'}} type='search' placeholder='  Eg: How do i activate F&O' />
                <br/>
                <a href='' style={{color:"white",textDecoration:"underline",fontSize:"18px"}}>Track account opening</a>&nbsp;&nbsp;
                <a href='' style={{color:"white",textDecoration:"underline",fontSize:"18px"}}> Track segment activation</a>&nbsp;&nbsp;<br/>
                <a href='' style={{color:"white",textDecoration:"underline",fontSize:"18px"}}> Intraday margins</a>&nbsp;&nbsp;
                <a href='' style={{color:"white",textDecoration:"underline",fontSize:"18px"}}>Kite user manual</a>
            </div>
            <div className='col-6 mt-5 text-right'>
                <a href='' style={{fontSize:"20px",textDecoration:"underline",color:'white'}}>Track Tickets</a>
                <h4 className='text-left ml-5' style={{marginTop:"70px"}}>Featured</h4>
                <ol type='1' className='text-left ml-5' style={{fontSize:"17px"}}>
                   <a href='' style={{color:"white",textDecoration:"underline"}}><li className='mb-4'>Introduction of new F&O contracts on 4 individual securities</li></a> 
                    <a  href='' style={{color:"white",textDecoration:"underline"}}><li>Rights Entitlements listing in May 2025</li></a>
                </ol>
            </div>
            
        </div>
            
       </div>
     );
 }
 
 export default Hero;