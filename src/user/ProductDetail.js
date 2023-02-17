import React from 'react'
import Banner from './Banner';
import Footer from './Footer';
import Copyright from './Copyright';
import ProductDetailCpn from './ProductDetailCpn';

export default function ProductDetail() {
  return (
    <>
    {/* banner bg main start */}
    <div className="banner_bg_main" >
      <Banner></Banner>
    </div>
    {/* banner bg main end */}
    {/* fashion section start */}
    <div className="container-fluid pb-5">
      <ProductDetailCpn/>
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
