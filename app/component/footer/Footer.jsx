import React from "react";
import "./footer.css";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="footer">
      <div className="row w-100 d-flex  justify-content-center align-items-center">
        <div className="col-12 my-5 d-flex flex-column justify-content-center align-items-center col-md-6 col-lg-3">
          <Link href="#">
            <h1 style={{fontFamily:"log",fontSize:"50px",}}>Awari</h1>
          </Link>
          <Link  className="links" href="#">Men</Link>
          <Link className="links" href="#">Women</Link>
          <Link className="links" href="#">children</Link>
          <Link className="links" href="#">Limited edition</Link>
        </div>
        <div className="col-12 my-5 d-flex flex-column justify-content-center align-items-center col-md-6 col-lg-3">
          <Link href="#">
            <h1>Customer Service</h1>
          </Link>
          <Link className="links" href="#">payment options</Link>
          <Link className="links" href="#">Track order</Link>
          <Link className="links" href="#">Find a store</Link>
          <Link className="links" href="#">encircle program</Link>
        </div>
        <div className="col-12 my-5 d-flex flex-column justify-content-center align-items-center col-md-6 col-lg-3">
          <Link href="#">
            <h1>Contact US</h1>
          </Link>
          <Link className="links" href="#">+91 9090909090</Link>
          <Link className="links" href="#">customercare@awari.com</Link>
          <Link className="links" href="#">FAQs</Link>
        </div>
        <div className="col-12 my-5 d-flex flex-column justify-content-center align-items-center col-md-6 col-lg-3">
          <Link href="#">
            <h1>About Awari</h1>
          </Link>
          <Link className="links" href="#">About us</Link>
          <Link className="links" href="#">Help&contact</Link>
          <Link className="links" href="#">Careers</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
