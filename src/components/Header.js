import React, { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w256-rw"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
          {/* we could also have used anchor tag but it refreshes the page on every click but we dont want to do that, 
          we want to get the data from client side itself and make a SINGLE PAGE APPLICATION so we have used Link*/}
          <li>Cart</li>
          <button
            onClick={() => {
              if (isLoggedIn === false) {
                setIsLoggedIn(true);
              } else {
                setIsLoggedIn(false);
              }
            }}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
