import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

export const SidebarData2 = [
  {
    title: "Home",
    path: "/Dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/Records",
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
