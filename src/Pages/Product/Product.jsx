import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { AllProducts } from '../../Components/Context/ProductContext';
import ProductDisplay from './ProductDisplay';
import ProductDescription from './ProductDescription';
import RelatedProduct from './RelatedProduct';

const Product = () => {
const {AllProductsData} = useContext(AllProducts);
const {id} = useParams()
const Product = AllProductsData.find((e)=> e.id === parseInt(id , 10));

    return (
   <>
   <ProductDisplay Product={Product}/>
    <ProductDescription/>
    <RelatedProduct/>
    </>
  )
}

export default Product;
