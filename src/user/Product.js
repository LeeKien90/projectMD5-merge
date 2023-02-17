import React from "react";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <>
      <div className="col-lg-4 col-sm-4">
        <div className="box_main">
          <h4 className="shirt_text">Man T -shirt</h4>
          <p className="price_text">
            Price <span style={{ color: "#262626" }}>$ 30</span>
          </p>
          <div className="tshirt_img">
            <img src={require("./images/tshirt-img.png")}  />
          </div>
          <div className="btn_main">
            <div className="buy_bt">
              <Link to={"/user/cart"}>Buy now</Link>
            </div>
            <div className="seemore_bt">
              <Link to={"/user/productDetail"}>See More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
