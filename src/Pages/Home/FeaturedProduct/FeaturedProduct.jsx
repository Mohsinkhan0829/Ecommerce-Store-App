import React from 'react'
import Featureditem from './Featureditem'
import AllProductsData from '../../../Components/Context/AllProductsData'

const FeaturedProduct = () => {
  return (
    
            <div class="product">
                {
                    AllProductsData.map((item)=> {
                      return <Featureditem key={item} 
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      brand={item.brand}
                      price={item.Price}
                      rating={item.rating}
                      />
                    })
                }
            </div>
  )
}

export default FeaturedProduct;
