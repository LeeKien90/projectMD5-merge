import React from "react";
import { Link } from "react-router-dom";

export default function () {
  const handleOpenNav = () => {
    return (document.getElementById("mySidenav").style.width = "250px");
  };

  const handleCloseNav = () => {
    return (document.getElementById("mySidenav").style.width = "0");
  };
  return (
    <>
      {/* header top section start */}
      <div className="container">
        <div className="header_section_top">
          <div className="row">
            <div className="col-sm-12">
              <div className="custom_menu">
                <ul>
                  <li>
                    <Link to={"/user/home"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/user/fashion"}>Fashion</Link>
                  </li>
                  <li>
                    <Link to={"/user/electronic"}>Electronic</Link>
                  </li>
                  <li>
                    <Link to={"/user/jewellery"}>Jewellery</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header top section start */}
      {/* logo section start */}
      <div className="logo_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="logo">
                <Link to={"/user/home"}>
                  <img src={require("./images/logo.png")} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* logo section end */}
      {/* header section start */}
      <div className="header_section">
        <div className="container">
          <div className="containt_main">
            <div id="mySidenav" className="sidenav">
              <a
                href="javascript:void(0)"
                className="closebtn"
                onClick={handleCloseNav}
              >
                ×
              </a>
              <Link to={"/user/home"}>Home</Link>
              <Link to={"/user/fashion"}>Fashion</Link>
              <Link to={"/user/electronic"}>Electronic</Link>
              <Link to={"/user/jewellery"}>Jewellery</Link>
            </div>
            <span className="toggle_icon" onClick={handleOpenNav}>
              <img src={require("./images/toggle-icon.png")} />
            </span>
            <div className="main">
              {/* Another variation with a button */}
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search this blog"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    style={{
                      backgroundColor: "#f26522",
                      borderColor: "#f26522",
                    }}
                  >
                    <i className="fa fa-search" />
                  </button>
                </div>
              </div>
            </div>
            <div className="header_box">
              <div className="lang_box nav-item dropdown">
                <a
                  href="#"
                  title="Language"
                  className="nav-link"
                  data-toggle="dropdown"
                  aria-expanded="true"
                >
                  <img
                    src={require("./images/flag-uk.png")}
                    alt="flag"
                    className="mr-2 "
                    title="United Kingdom"
                  />{" "}
                  English{" "}
                  <i className="fa fa-angle-down ml-2" aria-hidden="true" />
                </a>
                <div className="dropdown-menu ">
                  <a href="#" className="dropdown-item">
                    <img
                      src={require("./images/flag-france.png")}
                      className="mr-2"
                      alt="flag"
                    />
                    French
                  </a>
                </div>
              </div>
              <div className="login_menu">
                <ul>
                  <li>             
                    <Link to={"/user/cart"}>
                      <i className="fa fa-shopping-cart" aria-hidden="true" />
                      <span className="padding_10">Cart</span>
                    </Link>                                 
                  </li>
                  <li>
                    <div className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle p-0"
                        data-toggle="dropdown"
                      >
                        <i className="fa fa-user" aria-hidden="true" />
                        <span className="padding_10 ">Login</span>
                      </a>
                      <div
                        className="dropdown-menu bg-primary rounded-0 border-0 m-0"
                        style={{ left: -124 }}
                        
                      >
                        <Link to={"/admin/auth/sign-in"} className="dropdown-item">Login</Link>                      
                        <Link to={"/admin/auth/sign-up"} className="dropdown-item">Register</Link>                                        
                      </div>
                    </div>                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header section end */}
      {/* banner section start */}
      <div className="banner_section layout_padding">
        <div className="container">
          <div id="my_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-sm-12">
                    <h1 className="banner_taital">
                      Get Start <br />
                      Your favriot shoping
                    </h1>
                    <div className="buynow_bt">
                      <Link to={"/user/home"}>Buy Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner section end */}
    </>
  );
}
