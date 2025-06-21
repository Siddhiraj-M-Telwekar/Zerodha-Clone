import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';

import HomePage from './Landing_page/home/HomePage.jsx';
import Signup from './Landing_page/signup/Signup';
import AboutPage from './Landing_page/about/AboutPage.jsx';
import ProductPage from './Landing_page/products/ProductPage';
import SupportPage from './Landing_page/support/SupportPage.jsx';
import Navbar from './Landing_page/Navbar.jsx';
import Footer from './Landing_page/Footer.jsx';
import NotFound from './Landing_page/NotFound.jsx';
import PricingPage from './Landing_page/pricing/PricingPage';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>  
      <Route path='/support' element={<SupportPage/>}/> 
      <Route path='*' element={<NotFound/>}/>  
    </Routes>
    <Footer/>
  </BrowserRouter>
)
