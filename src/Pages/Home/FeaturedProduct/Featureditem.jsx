import React from "react";
import {FaStar} from "react-icons/fa"
import { Link } from "react-router-dom";

const Featureditem = (props) => {
  
  return (
    <>
        <div class="product-cart">
          <Link to={`/product/${props.id}`}>
          <img src={props.image}/>
          </Link>
          <div class="description">
            <span>{props.brand}</span>
            <h5>${props.price}</h5>
            <h4>{props.name}</h4>
            <div class="star">
                        <i class="fas fa-star"><FaStar/></i>
                        <i class="fas fa-star"><FaStar/></i>
                        <i class="fas fa-star"><FaStar/></i>
                        <i class="fas fa-star"><FaStar/></i>
                        <i class="fas fa-star"><FaStar/></i>
                    </div>
          </div>
        </div>
    </>
  );
};

export default Featureditem;;
