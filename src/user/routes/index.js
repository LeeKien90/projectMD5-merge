import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Fashion from "../Fashion";
import Electronic from "../Electronic";
import Jewellery from "../Jewellery";
import ProductDetail from "../ProductDetail";
import ListCart from "../ListCart";
import '../css/owl.carousel.min.css'
import '../css/style.css'
import '../css/responsive.css'
import '../css/jquery.mCustomScrollbar.min.css'
import '../css/bootstrap.min.css'
import '../css/animate.min.css'



export default function Index() {
  return (
    <>
      <Switch>
        <Route exact path="/user/home" render={() => <Home/>}></Route>
        <Route path="/user/fashion" render={() => <Fashion/>}></Route>
        <Route path="/user/electronic" render={() => <Electronic/>}></Route>
        <Route path="/user/jewellery" render={() => <Jewellery/>}></Route>
        <Route path="/user/productDetail" render={() => <ProductDetail/>}></Route>
        <Route path="/user/cart" render={() => <ListCart/>}></Route>        
      </Switch>
    </>
  );
}
