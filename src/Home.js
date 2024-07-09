import React from "react";

import "./Home.css";
import Memories from "./Memories";
import Searchbox from "./Searchbox";
import Products from "./Products";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cartpage from "./Cartpage";
import Extrafooter from "./Extrafooter";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Searchbox />
      <Memories />
      <Products />
      <Footer />
      <Extrafooter />
      <Cartpage />
    </div>
  );
}
