import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom" style={{backgroundColor:"fff"}}>
  <div className="container-fluid ml-5">
    <Link className="navbar-brand " to="/">
        <img src='Media/logo.svg' style={{width:"22%",marginLeft:"20%"}}/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form className="d-flex" role="search">
        <ul className="navbar-nav mb-lg-0">
        <li className="nav-item" >
          <Link className="nav-link active ml-5" style={{color:"gray"}}  to="/signup">SignUp</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " style={{color:"gray"}}  to="/about">About</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link active " style={{color:"gray"}} to="/product">Products</Link>
        </li>
         <li className="nav-item ">
          <Link className="nav-link active " style={{color:"gray"}} to="/Pricing">Pricing</Link>
        </li>
         <li className="nav-item ">
          <Link className="nav-link active " style={{color:"gray"}} to="/support">Support</Link>
        </li>
        
      </ul>
      </form>
    </div>
  </div>
</nav>
        
       
     );
}

export default Navbar;