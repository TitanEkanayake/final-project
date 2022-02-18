import React from "react";
import { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { ImProfile } from "react-icons/im";
import { FiHome, FiLogOut } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { RiReservedFill } from "react-icons/ri";
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <>
      <div id="header">
        <ProSidebar>
          <SidebarHeader>
            <div className="logotext">
              <p>{"Reservation.LK "}</p>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem /*active={true}*/ icon={<FiHome />}>
                <Link to="/CustomerDash">Home</Link>
              </MenuItem>
              <MenuItem icon={<ImProfile />}>
                <Link to="/Customerprofile">Profile</Link>
              </MenuItem>
              <MenuItem icon={<RiReservedFill />}>Reservations</MenuItem>
              <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>
                <Link to="/Customerlogin">Logout</Link>
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};
export default Sidebar;
