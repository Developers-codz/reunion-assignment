import React from "react";
import { NavLink } from "react-router-dom";
import { DropDown, Logo } from "../../assets";
import "./style.css";

export const Navbar = () => {
  const linksArr = [
    { name: "Rent", isDropDown: false, link: "/" },
    { name: "Buy", isDropDown: false, link: "buy" },
    { name: "Sell", isDropDown: false, link: "sell" },
    {name:"Fav",isDropDown:false,link:"/favorites"},
    { name: "Manage Property", isDropDown: true, link: "/" },
    { name: "Resources", isDropDown: true, link: "/" },
   
  ];
  return (
    <header className="navbar-wrapper">
      <div className="heading">
        <Logo />
        <span>Estatery</span>
      </div>
      <ul className="links-wrapper">
        {linksArr.map((link, i) => (
          <li key={i}>
            {link.isDropDown ? (
              <>
                {link.name}
                <DropDown />
              </>
            ) : (
              <>
                <NavLink
                  to={link.link}
                  className={({isActive}) =>
                    isActive ? "pills active" : "pills"
                  }
                >
                  {link.name}
                </NavLink>
              </>
            )}
          </li>
        ))}
      </ul>
      <div className="btn-wrapper">
        <button className="btn login-btn">Login</button>
        <button className="btn signup-btn">Signup</button>
      </div>
    </header>
  );
};
