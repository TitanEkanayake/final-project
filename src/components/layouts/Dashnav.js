import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Dashnav.css";
import { IconContext } from "react-icons";
import { auth } from "../../Firebase_con";
import { signOut } from "firebase/auth";
import * as BiIcons from "react-icons/bi";

function Dashnav() {
  const [Sidebar, setSidebar] = useState(false);
  let navigate = useNavigate();

  const showSidebar = () => setSidebar(!Sidebar);

  const logout = async () => {
    await signOut(auth);
    navigate("/Customerlogin");
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={Sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className={"nav-text"} onClick={logout}>
              <BiIcons.BiLogOut />
              <span>{"Logout"}</span>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Dashnav;
