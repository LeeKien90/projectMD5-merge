import React from 'react'

export default function Footer() {
  return (
   <>
 <div className="container">
      <div className="footer_logo">
        <a href="index.html">
          <img src={require("./images/footer-logo.png")} />
        </a>
      </div>
      <div className="input_bt">
        <input
          type="text"
          className="mail_bt"
          placeholder="Your Email"
          name="Your Email"
        />
        <span className="subscribe_bt" id="basic-addon2">
          <a href="#">Subscribe</a>
        </span>
      </div>
      <div className="location_main">
        Hot Line Number : <a href="#">+84 034 754 0123</a>
      </div>
    </div>
</>

  )
}
