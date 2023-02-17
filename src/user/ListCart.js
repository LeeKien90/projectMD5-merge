import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Copyright from './Copyright';
import Cart from './Cart';
import CartInfo from './CartInfo';


export default function ListCart() {
  return (
    <>
    {/* banner bg main start */}
    <div className="banner_bg_main">
      <Banner></Banner>
    </div>
    {/* banner bg main end */}
    {/* fashion section start */}
    <div className="fashion_section">
  {/* Cart Start */}
  <div className="container-fluid">
    <div className="row px-xl-5">
      <div className="col-lg-8 table-responsive mb-5">
        <table className="table table-light table-borderless table-hover text-center mb-0">
          <thead className="thead-dark">
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className="align-middle">
           <Cart/>
           <Cart/>
           <Cart/>
           <Cart/>
           <Cart/>
           <Cart/>
           <Cart/>
          </tbody>
        </table>
      </div>
      <div className="col-lg-4">
        <CartInfo/>
      </div>
    </div>
  </div>
  {/* Cart End */}
    </div>
    {/* fashion section end */}
  
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
  )
}
