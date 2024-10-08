"use client";
import React from "react";
import "./nabar.css";
import { useState } from "react";
const Navabr = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div>
      <nav className="navbar   ">
        <div className="container-fluid p-2">
          <div className="d-flex justify-content-center align-items-center" style={{display:"flex", gap:"10px"}}>
            <button
              className="navbar-toggler d-lg-none d-md-none d-sm-block"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <a className="navbar-brand" href="#">
              Awari
            </a>
          </div>
          <div className="searchdiv">
            {!isFocused && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1 1 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0"></path>
              </svg>
            )}
            <input
              className="search"
              type="search"
              placeholder={!isFocused ? "Search" : ""}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>
          <div className="icons  ">
            <div className="heart ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 01.176-.17C12.72-3.042 23.333 4.867 8 15"></path>
              </svg>
              <p>wishlist</p>
            </div>
            <div className="cart text-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.491.592l-1.5 8A.5.5 0 0113 12H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 100 4 2 2 0 000-4m7 0a2 2 0 100 4 2 2 0 000-4m-7 1a1 1 0 110 2 1 1 0 010-2m7 0a1 1 0 110 2 1 1 0 010-2"></path>
              </svg>
              <p className="text-center">cart</p>
            </div>
            <div className="loginsvg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 100-6 3 3 0 000 6m2-3a2 2 0 11-4 0 2 2 0 014 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path>
              </svg>
              <p>account</p>
            </div>
          </div>
          <div className="searchdiv2">
          {!isFocused && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1 1 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0"></path>
            </svg>
          )}
          <input
            className="search"
            type="search"
            placeholder={!isFocused ? "Search" : ""}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5
                style={{
                  fontFamily: "log",
                  fontWeight: "bold",
                  fontSize: "40px",
                }}
                className="offcanvas-title"
                id="offcanvasNavbarLabel"
              >
                Awari
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Find More
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Men
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Women
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        View
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navabr;
