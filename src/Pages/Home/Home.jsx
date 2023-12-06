import React from "react";
import Hero from "./HeroSection/Hero";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import FeaturedProductHeading from "./FeaturedProduct/FeaturedProductHeading";
import Features from "./features/Features";
import Banner from "./OfferBanner/Banner";
import NewArrival from "./NewArrivalHeading/NewArrival";
import NewProduct from "./NewArrivalHeading/NewProduct";
import OfferCarts from "./OfferCarts/OfferCarts";
import SmallCarts from "./SmallCarts/SmallCarts";
import NewsLattersection from "./NewLatter/NewsLatter";
import FooterSection from "./Footer/FooterSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <FeaturedProductHeading />
      <FeaturedProduct />
      <Banner />
      <NewArrival />
      <NewProduct />
      <OfferCarts />
      <SmallCarts/>
      <NewsLattersection />
      <FooterSection/>
    </div>
  );
};

export default Home;
