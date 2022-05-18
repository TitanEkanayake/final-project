import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { SidebarData2 } from "./SidebarData2";
import "./Dashnav.css";
import { IconContext } from "react-icons";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/Firebase_con";
import * as BiIcons from "react-icons/bi";

function Compside() {
  const [Sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!Sidebar);

  let navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/Companylogin");
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
            {SidebarData2.map((item, index) => {
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

export default Compside;
