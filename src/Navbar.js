import React from "react";
import "./Home.css";

import MivamartImage from "./MivamartImage.jpg";
import Wishlist from "./Wishlist.jpg";
import Search from "./Search.jpg";
import cart from "./cart.jpg";
import profile from "./profile.jpg";

export default function Navbar() {
  return (
    <div>
      <nav className="d-flex justify-content-between">
        <img
          src={MivamartImage}
          alt="Logo of online shop"
          className="mivamart"
        />
        <ul className="top-menu" id="top-menutwo">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Best sellers</a>
          </li>
          <li>
            <a href="#">Catalog</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
        <ul className="icons">
          <li>
            <img src={Search} alt="" />
          </li>
          <li>
            <img src={Wishlist} alt="" />
          </li>
          <li>
            <img src={cart} alt="" />
          </li>

          <li>
            <img src={profile} alt="" />
          </li>
        </ul>

        <i class="fa-solid fa-bars" id="menu-btn" onclick="openmenu()"></i>
        <i class="fa-solid fa-times" id="close-btn" onclick="closemenu()"></i>
      </nav>
    </div>
  );
}
