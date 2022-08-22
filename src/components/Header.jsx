import React from "react";
import { Link } from "react-router-dom";
import SearchMovie from "./SearchMovie";
import logo from "../assets/fxdigitallogo.png";

export const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />
        <SearchMovie />

        <Link to="/">Home</Link>
      </nav>
    </header>
  );
};

export default Header;
