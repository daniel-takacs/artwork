import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = ({ setIsLoaded }) => {
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <Link to="/">
            <a class="navbar-brand" href="#">
              Artworks
            </a>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/">
                  <a class="nav-link" aria-current="page" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/favourites">
                  <a class="nav-link" href="#">
                    Favourites
                  </a>
                </Link>
              </li>
            </ul>
            <SearchForm setIsLoaded={setIsLoaded}/>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
