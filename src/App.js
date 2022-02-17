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
import Sidebar from "./components/layouts/Sidebar";

const navEnabled = [
  "/",
  "/aboutus",
  "/Contactus",
  "/Selection",
  "/CustomerLogin",
  "/Companylogin",
];
const sideEnabled = ["/customerdash"];

const App = () => {
  const { pathname } = useLocation();
  const enableNav = () =>
    navEnabled.findIndex((e) => e.toLowerCase() === pathname.toLowerCase()) !=
    -1;
  const enableside = () =>
    sideEnabled.findIndex((e) => e.toLowerCase() === pathname.toLowerCase()) !=
    -1;
  return (
    <div className="app">
      {enableNav() && <Navigationbar />}
      {enableside() && <Sidebar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Selection" element={<Selection />} />
        <Route path="/CustomerLogin" element={<CustomerLogin />} />
        <Route path="/Companylogin" element={<CompanyLogin />} />
        <Route path="/Customerdash" element={<CustomerDash />} />
      </Routes>
      {enableNav() && <Footer />}
    </div>
  );
};
export default App;
