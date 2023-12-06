import React from 'react';
import Banner from "../../assets/img/banner/b1.jpg"
const ShopBanner = () => {

    const StayHomeBanner = {
        backgroundImage : `URL(${Banner})`
    }
  return (
    <section id="shop-header" style={StayHomeBanner}> 
       
        <h2>#stayhome</h2>
       
        <p>Save more with coupons and up to 70% off!</p>
       
    </section>
  )
}

export default ShopBanner;
