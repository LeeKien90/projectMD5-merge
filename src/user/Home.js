import React from "react";
import Banner from "./Banner";
import Copyright from "./Copyright";
import Footer from "./Footer";
import ListProduct from "./ListProduct";


export default function () {
  return (
    <>
      {/* banner bg main start */}
      <div className="banner_bg_main">
        <Banner></Banner>
      </div>
      {/* banner bg main end */}
      {/* fashion section start */}
      <div className="fashion_section">
        <ListProduct />
      </div>
      {/* fashion section end */}
      {/* electronic section start */}
      <div className="fashion_section">
        <ListProduct />
      </div>
      {/* electronic section end */}
      {/* jewellery  section start */}
      <div className="fashion_section">
        <ListProduct />
      </div>
      {/* jewellery  section end */}
      {/* footer section start */}
      <div className="footer_section layout_padding">
        <Footer />
      </div>
      {/* footer section end */}
      {/* copyright section start */}
      <div className="copyright_section">
        <Copyright />
      </div>
    </>
  );
}
