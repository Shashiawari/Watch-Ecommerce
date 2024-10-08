import React from "react";
import "./corousal.css";
import Link from "next/link";
const Corousal = () => {
  return (
    <div className="cour d-flex flex-column ">
      <div className="ctext w-100 mb-5">
        <Link href="#">Men</Link>
        <Link href="#">Women</Link>
        <Link href="#">smart watches</Link>
        <Link href="#">premium watches</Link>
        <Link href="#">international brands</Link>
        <Link href="#">watches</Link>
        <Link href="#">sale</Link>
        <Link href="#">services</Link>
        <Link href="#">Accessories</Link>
        <Link href="#">gifting</Link>
      </div>
      <div className="ctext2 w-100 mb-5">
        <Link href="#">Men</Link>
        <Link href="#">Women</Link>
        <Link href="#">smart watches</Link>
        <Link href="#">premium watches</Link>
        <Link href="#">more</Link>
      </div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide large"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="c1.png" className="d-block w-100 img-fluid" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="c2.png" className="d-block w-100 imf-fluid" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="c3.png" className="d-block w-100 imf-fluid" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="c4.png" className="d-block w-100 imf-fluid" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="small">
        {" "}
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="cc2.png"
                className="d-block w-100 img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="cc3.png"
                className="d-block w-100 imf-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="cc4.png"
                className="d-block w-100 imf-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="cc5.png"
                className="d-block w-100 imf-fluid"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Corousal;
