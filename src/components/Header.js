import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { logo } from "../constants";
import UserContext from "../utils/userContext";

const Title = () => (
  <a href="/">
    <img className="h-28 p-2" src={logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-red-300 ">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2"> 
            <Link to="/">Home</Link>
          </li>
          <li  className="px-2">
            <Link to="/contact">Contact</Link>
          </li>

          <li  className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li  className="px-2">Cart</li>
          <li  className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          {/* we could also have used anchor tag but it refreshes the page on every click but we dont want to do that, 
          we want to get the data from client side itself and make a SINGLE PAGE APPLICATION so we have used Link*/}
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      <span className="p-10 font-bold text-red-700">{user.name}</span>
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
      {/* </ul>
      </div> */}
    </div>
  );
};

export default Header;
