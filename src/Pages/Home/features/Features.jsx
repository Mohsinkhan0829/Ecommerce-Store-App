import React from 'react'
import FeaturesItem from './FeaturesItem'
import FeatureData from './FeaturesData'
const Features = () => {
  return (
    <>
    <section id="features" class="section-p1">

        <div class="feature-box" style={{ display: 'flex' ,alignItems:"center",justifyContent:"space-evenly" }}>
          {FeatureData.map((item)=>{
            return <FeaturesItem key={item} name={item.name} image={item.image} />
          })}
        </div>
        </section>
        </>
  )
}

export default Features
