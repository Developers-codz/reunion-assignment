import React from "react";
import { DropDown, Logo } from "../../assets";
import "./style.css";

export const Navbar = () => {
  const linksArr = [
    { name: "Rent", isDropDown: false },
    { name: "Buy", isDropDown: false },
    { name: "Sell", isDropDown: false },
    { name: "Manage Property", isDropDown: true },
    { name: "Resources", isDropDown: true },
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
            {link.isDropDown ? 
            <>
                {link.name}<DropDown />
            </>
             : (<>
             <input type="radio" name="list" id={link.name} className="checkbox-li" checked />
             <label className="pills" htmlFor={link.name}>{link.name}</label>
             </>)}
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
