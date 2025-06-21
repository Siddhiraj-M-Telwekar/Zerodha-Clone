import React from 'react';
import Hero from './Hero';
import LeftImageSection from './LeftImageSection';
import RightImageSection from './RightImageSection';
import Universe from './Universe';

function ProductPage() {
    return ( 
        <>
         <Hero/>
        <LeftImageSection  
        imageUrl="Media/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="tryDemo"
        learnMore="learnMore"
        googlePlay=""
        appStore=""
        tryDemoStr='Try Demo'
        learnMorestr='Learn More'
      />
        <RightImageSection 
        imageUrl="Media/console.png" 
        productName="Console" 
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." 
        learnMore=""
        learnMoreStr="Learn More"/>

        <LeftImageSection  
        imageUrl="Media/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
        learnMore=""
        googlePlay=""
        appStore=""
        tryDemoStr='Coin'
        learnMorestr=""
      />
       <RightImageSection 
        imageUrl="Media/kiteconnect2.png" 
        productName="Kite Connect API" 
       productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="kiteConnect"
        learnMoreStr="Kite Connect"/>
       
        <LeftImageSection  
        imageUrl="Media/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
        tryDemoStr=''
        learnMorestr=''
      />
      <Universe/>
        </>
     );
}

export default ProductPage;