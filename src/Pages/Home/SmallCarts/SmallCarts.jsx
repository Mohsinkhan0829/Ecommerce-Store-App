import React from 'react'
import { Tshirts, seasoneSale, winterJocket } from '../../../assets/img/img'

const SmallCarts = () => {
    const Smallcarts1= {
        backgroundImage : `URL(${seasoneSale})`
    }
    const Smallcarts2 ={
        backgroundImage : `URL(${winterJocket})`
    }
    const Smallcarts3 = {
        backgroundImage : `URL(${Tshirts})`
    }
  return (
    <section id="small-banner">
    <div class="banner-img" style={Smallcarts1}>
        <h2>SEASONE SALE</h2>
        <h3>Winter Collection -50% OFF</h3>
    </div>
    <div class="banner-img img2" style={Smallcarts2}>
        <h2>NEW WINTER JOCKET COL..</h2>
        <h3>Spring/summer 2022</h3>
    </div>
    <div class="banner-img img3" style={Smallcarts3}>
        <h2>T-SHIRTS</h2>
        <h3>New Arrival</h3>
    </div>

</section>
  )
}

export default SmallCarts;
