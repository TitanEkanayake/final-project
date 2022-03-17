import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

export const SidebarData2 = [
  {
    title: "Dashboard",
    path: "/ComDash",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Company Profile",
    path: "/ComProfile",
    icon: <AiIcons.AiFillProfile />,
    cName: "nav-text",
  },
  {
    title: "Records",
    path: "/Records",
    icon: <AiIcons.AiFillBook />,
    cName: "nav-text",
  },
  {
    title: "Customer Reservations",
    path: "/CustomerRes",
    icon: <FaIcons.FaUserAlt />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/CompanyLogin",
    icon: <BiIcons.BiLogOut />,
    cName: "nav-text",
  },
];