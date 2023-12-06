import React from 'react'
import { offerbaner } from '../../../assets/img/img'
import { Link } from 'react-router-dom'
const Banner = () => {
    const style = {
        backgroundImage:`URL(${offerbaner})`
       }

  return (
    <section id="banner" class="section-m1" style={style}>
    <h4>Repair service</h4>
    <h2>Up to <span> 70% Off</span>- All T-shirts & all acessories</h2>
    <Link to={"/shop"}>
    <button id="ban-btn" class="normal">Explore more</button>
    </Link>
</section>
  )
}

export default Banner;
