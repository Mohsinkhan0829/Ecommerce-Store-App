import React from 'react'
import { CrazyDeals, upcomingSeasone } from '../../../assets/img/img'

const OfferCarts = () => {
const crazyDeals = {
    backgroundImage : `URL(${CrazyDeals})`,
}
const UpcomingSeason ={
backgroundImage:`URL(${upcomingSeasone})`,
} 

  return (
    <section id="sm-banner">
        <div class="banner-box" style={UpcomingSeason}>
            <h4>Crazy deals</h4>
            <h2>buy 1 get 1 free</h2>
            <span>The best classic deals is on sale at cara</span><br/>
            <button>learn more</button>
        </div>
        <div class="banner-box banner-2" style={crazyDeals}>
            <h4>Spring/Summer</h4>
            <h2>Upcoming season</h2>
            <span>The best classic deals is on sale at cara</span><br/>
            <button>Collection</button>
        </div>
    </section>
  )
}

export default OfferCarts;
