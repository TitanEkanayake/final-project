import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
  {
    title: "Home",
    path: "/CustomerDash",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/Customerprofile",
    icon: <FaIcons.FaUserAlt />,
    cName: "nav-text",
  },
  {
    title: "Reservations",
    path: "/CustomerRes",
    icon: <AiIcons.AiFillBook />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/CustomerLogin",
    icon: <BiIcons.BiLogOut />,
    cName: "nav-text",
  },
];
