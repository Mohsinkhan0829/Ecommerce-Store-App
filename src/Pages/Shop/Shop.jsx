import React from "react";
import NewsLattersection from "../Home/NewLatter/NewsLatter";
import FooterSection from "../Home/Footer/FooterSection";
import ShopBanner from "./ShopBanner";
import FeaturedProduct from "../Home/FeaturedProduct/FeaturedProduct";
import NewProduct from "../Home/NewArrivalHeading/NewProduct";

const Shop = () => {
  return (
    <div>
      <ShopBanner />
      <FeaturedProduct />
      <NewProduct />
      <NewsLattersection />
      <FooterSection />
    </div>
  );
};

export default Shop;
