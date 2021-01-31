import React from "react";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="bar">
        <Link href="">
          <a>Sick Fits</a>
        </Link>
        <Nav></Nav>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <div>Cart</div>
    </div>
  );
};

export default Header;
