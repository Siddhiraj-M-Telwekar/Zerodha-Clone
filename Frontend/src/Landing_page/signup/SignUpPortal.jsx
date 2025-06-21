import React, { useState } from 'react';
import "./signUpPortal.css";
import axios from 'axios';
import {v4 as uuid} from 'uuid';
import { Link } from "react-router-dom";


function SignUpPortal() {
    const [email,setEmail]=useState('');
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const clickEvent = async (e) => {
 // Prevent page reload
      const newUser = {
      id: uuid(),
      email: email,
      username: username,
      password: password,
    };
    try{
    await axios.post("http://localhost:3002/newuser", newUser);

    setEmail("");
    setUsername("");
    setPassword("");
  } catch (error) {
    console.error("Error during signup:", error);
  }
};

    return ( 
         <div className='container mt-5 mb-5 p-5'>
            <div className='row'>
                <div className='col text-right'>
                    <img src="public/Media/newLogo/signuppage.png" alt="Signup Illustration" height="90%" />
                </div>
                <div className='col text-left'>
                    <h4 fs-2>Signup Now</h4>
                    <h6 className='text-muted'>Or track your existing application</h6>
                    <form onSubmit={clickEvent}>
                    <div class="input-group">
                     
                        <input type="email" id="email" name="email" placeholder="Email Id" required value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                    <div class="input-group">
                    
                        <input type="text" id="username" name="username" placeholder="Username" required value={username} 
                        onChange={(e) => setUsername(e.target.value)}/>
                        </div>

                    <div class="input-group">
                   
                        <input type="password" id="password" name="password" placeholder="Password" required value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                    <button type="submit" class="submit-btn" >Register</button>
                    </form>            
                </div>
            </div>
         </div>       
     );
}

export default SignUpPortal;