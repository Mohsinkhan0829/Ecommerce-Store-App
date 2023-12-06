import React, { useContext } from "react";
import { logo } from "../assets/img/img";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AllProducts } from "./Context/ProductContext";
import { FaBars ,FaArrowRight } from "react-icons/fa";

const NavBar = () => {
  const {getToatalCartItems}=useContext(AllProducts);

  const handleMuneBar = ()=>{
    const Showsidebar = document.querySelector("#sidebar");
    Showsidebar.style.display = "block";
  }

  const handleMuneBarClose = ()=>{
    const CloseSidebar = document.querySelector("#sidebar");
    CloseSidebar.style.display="none"
  }
  return (
    <section id="header">
      <Link to='/home'>
      <a href="/">
        <img src={logo} class="logo" alt="" />
      </a>
      </Link>
     

      <div >
        <ul id="navbar">
          <Link  style={{textDecoration:'none'}} to="/home">
            <li class="menubar">Home </li>
          </Link>

          <Link style={{textDecoration:'none'}} to="/Shop">
            <li  class="menubar">shop</li>
          </Link>

          <Link  style={{textDecoration:'none'}} to="/Blog">
            <li class="menubar">blog</li>
          </Link>

          <Link  style={{textDecoration:'none'}} to="/About">
            <li class="menubar"> about</li>
          </Link>

          <Link  style={{textDecoration:'none'}} to="/Contact">
            
            <li class="menubar"> contact</li>{" "}
          </Link>
        </ul>
      </div>

        <ul id="sidebar">
        <FaArrowRight className="ClosesidebarIcon" onClick={handleMuneBarClose}/>

          <Link  style={{textDecoration:'none'}} to="/home">
            <li className="sidebarlist">Home </li>
          </Link>

          <Link style={{textDecoration:'none'}} to="/Shop">
            <li className="sidebarlist" >shop</li>
          </Link>

          <Link  style={{textDecoration:'none'}} to="/Blog">
            <li className="sidebarlist">blog</li>
          </Link>

          <Link  style={{textDecoration:'none'}} to="/About">
            <li class="sidebarlist"> about</li>
          </Link>

          <Link  style={{textDecoration:'none'}} to="/Contact">
            <li class="sidebarlist"> contact</li>{" "}
          </Link>
        </ul>


      <div className="cart-menuIcons">
      <Link to='/Cart' style={{textDecoration:'none'}}>
      <a className="cart">
        <div className="cart-counter">{getToatalCartItems()}</div>
        <FaCartPlus />
      </a>
      </Link>
      <FaBars className="menuIcons" onClick={handleMuneBar} />
      </div>

      
    </section>
  );
};

export default NavBar;
