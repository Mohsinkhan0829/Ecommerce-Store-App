import React from "react";
import { buttonpng, hero } from "../../../assets/img/img"
import { Link } from "react-router-dom";
const Hero = () => {
  const style = {
    backgroundImage: `URL(${hero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const buttonstyle = {
    backgroundImage: `URL(${buttonpng})`,
  };
  return (
    <>
      <section style={style} id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>on all products</h1>
        <p>Save more with coupons and up to 70% off!</p>
       <Link to="/Shop">
       <button style={buttonstyle} id="hero-btn">
          Shop now
        </button>
       </Link>
        
      </section>
    </>
  );
};

export default Hero;
