import React from 'react'
import NewArrivalItem from './NewArrivalItem';
import NewArrivalData from './NewArrivalData';
import AllProductsData from '../../../Components/Context/AllProductsData';

const NewProduct = () => {
  return (
    <div className="product">
        {
            AllProductsData.map((item)=>{
               return <NewArrivalItem  key={item} 
               id={item.id}
                image={item.image}
                name={item.name}
                price={item.Price}
                brand={item.brand}
                />
            })
        }

    </div>
  )
}

export default NewProduct;