import React from "react";
import "./type.css";

const Types = () => {
  return (
    <div className="type mt-5 mb-5">
      <div className="container">
        <div className="grid">
          <div className="pic">
            <img src="/watches/1.png" alt="watch1" className="img-fluid"></img>
            <p className="ty">Analog</p>
          </div>
          <div className="pic">
            <img
              src="/watches/image.png"
              alt="watch2"
              className="img-fluid"
            ></img>
            <p className="ty">digital</p>
          </div>
          <div className="pic">
            <img src="/watches/3.png" alt="watch3" className="img-fluid"></img>
            <p className="ty">Bags</p>
          </div>
          <div className="pic">
            <img src="/watches/4.png" alt="watch3" className="img-fluid"></img>
            <p className="ty">Bags</p>
          </div>
          <div className="texts d d-lg-block d-none ">
            <div>
              <h1>view more</h1>
              <h1 style={{ color: "#F0A057" }}>view more</h1>
              <h1>view more</h1>
              <h1 style={{ color: "#F0A057" }}>view more</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="ist">
        <p>master your life with time</p>
      </div>
      <div className="ab mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6 p-5">
              <img src="watches/7.png" className="img-fluid"></img>
            </div>
            <div className="col-12 col-lg-6 col-md-6 ds ">
              <h2 className="">Awari Watches</h2>
              <p>
                Awari is a premium watch brand that blends precision
                craftsmanship with timeless elegance. Our watches are designed
                to cater to those who value both style and functionality,
                offering a seamless fusion of modern innovation and classic
                design. At Awari, we believe in delivering quality and
                reliability, ensuring that every piece we create stands the test
                of time
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="btext">
        <h3 className="autoblur">
          Limited Edition{" "}
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="86"
          height="86"
          fill="currentColor"
          className="bi bi-stars"
          viewBox="0 0 16 16"
        >
          <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 001.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 00-1.828 1.829l-.645 1.936a.361.361 0 01-.686 0l-.645-1.937a2.89 2.89 0 00-1.828-1.828l-1.937-.645a.361.361 0 010-.686l1.937-.645a2.89 2.89 0 001.828-1.828zM3.794 1.148a.217.217 0 01.412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 010 .412l-1.162.387A1.73 1.73 0 004.593 5.69l-.387 1.162a.217.217 0 01-.412 0L3.407 5.69A1.73 1.73 0 002.31 4.593l-1.162-.387a.217.217 0 010-.412l1.162-.387A1.73 1.73 0 003.407 2.31zM10.863.099a.145.145 0 01.274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 010 .274l-.774.258a1.16 1.16 0 00-.732.732l-.258.774a.145.145 0 01-.274 0l-.258-.774a1.16 1.16 0 00-.732-.732L9.1 2.137a.145.145 0 010-.274l.774-.258c.346-.115.617-.386.732-.732z"></path>
        </svg>
        </h3>
        <h3 className="autoblur">Watches</h3>
        <h3 className="autoblur">For Fair Prices</h3>
        <h3 className="autoblur">
          Check Out{" "}
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="86"
          height="86"
          fill="currentColor"
          className="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8"
          ></path>
        </svg>
        </h3>
      </div>
    </div>
  );
};

export default Types;
