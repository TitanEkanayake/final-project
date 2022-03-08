import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Aboutus from "./components/pages/Aboutus";
import Navigationbar from "./components/layouts/Navigationbar";
import Footer from "./components/layouts/Footer";
import Contactus from "./components/pages/Contactus";
import Selection from "./components/pages/Selection";
import CustomerLogin from "./components/pages/CustomerLogin";
import CompanyLogin from "./components/pages/CompanyLogin";
import CustomerDash from "./components/pages/CustomerDash";
import { useLocation } from "react-router-dom";
import Customerprofile from "./components/pages/Customerprofile";
import Dashnav from "./components/layouts/Dashnav";
import CustomerRes from "./components/pages/CustomerRes";
import CustomerInsdeRes from "./components/pages/CustomerInsdeRes";
import Walkthrough from "./components/Company/Walkthrough";
import Compside from "./components/layouts/Compside";
import { ComDash } from "./components/Company/ComDash";

const navEnabled = [
  "/",
  "/aboutus",
  "/Contactus",
  "/Selection",
  "/CustomerLogin",
  "/Companylogin",
];
const sideEnabled = [
  "/customerdash",
  "/Customerprofile",
  "/CustomerRes",
  "/CustomerInsdeRes",
];
const sideEnabled2 = ["/ComDash"];

const App = () => {
  const { pathname } = useLocation();
  const enableNav = () =>
    navEnabled.findIndex((e) => e.toLowerCase() === pathname.toLowerCase()) !=
    -1;
  const enableside = () =>
    sideEnabled.findIndex((e) => e.toLowerCase() === pathname.toLowerCase()) !=
    -1;
  const enableside2 = () =>
    sideEnabled2.findIndex((e) => e.toLowerCase() === pathname.toLowerCase()) !=
    -1;
  return (
    <div className="app">
      {enableNav() && <Navigationbar />}
      {enableside() && <Dashnav />}
      {enableside2() && <Compside />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Selection" element={<Selection />} />
        <Route path="/CustomerLogin" element={<CustomerLogin />} />
        <Route path="/Companylogin" element={<CompanyLogin />} />
        <Route path="/Customerdash" element={<CustomerDash />} />
        <Route path="/Customerprofile" element={<Customerprofile />} />
        <Route path="/CustomerRes" element={<CustomerRes />} />
        <Route path="/CustomerInsdeRes/:id" element={<CustomerInsdeRes />} />
        <Route path="/walkthrough" element={<Walkthrough />} />
        <Route path="/ComDash" element={<ComDash />} />
      </Routes>
      {enableNav() && <Footer />}
    </div>
  );
};
export default App;
