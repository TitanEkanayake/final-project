import React, { Component } from "react";
import { auth } from "./Firebase_con";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate } from "react-router";
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
import ComProfile from "./components/Company/ComProfile";
import CustomerResFrom from "./components/pages/CustomerResFrom";
import Comtemp1 from "./components/Company/Comtemp1";
import Comtemp2 from "./components/Company/Comtemp2";
import ComRecords from "./components/Company/ComRecords";
import ComResSelec from "./components/Company/ComResSelec";

const navEnabled = [
  "/",
  "/aboutus",
  "/Contactus",
  "/Selection",
  "/CustomerLogin",
  "/Companylogin",
];
const sideEnabled = [
  "customerdash",
  "Customerprofile",
  "CustomerRes",
  "CustomerInsdeRes",
  "CustomerResFrom",
];
const sideEnabled2 = [
  "ComDash",
  "ComProfile",
  "Comtemp1",
  "Comtemp2",
  "ComRecords",
  "ComResSelec",
];

const App = () => {
  const { pathname } = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const enableNav = () =>
    navEnabled.findIndex((e) => e.toLowerCase() === pathname.toLowerCase()) !=
    -1;
  const enableside = () =>
    sideEnabled.findIndex(
      (e) => e.toLowerCase() === pathname.split("/")[1].toLowerCase()
    ) != -1;
  const enableside2 = () =>
    sideEnabled2.findIndex(
      (e) => e.toLowerCase() === pathname.split("/")[1].toLowerCase()
    ) != -1;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>There was an error...</div>;
  if (user)
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
          <Route path="/Customerlogin" element={<CustomerLogin />} />
          <Route path="/Companylogin" element={<CompanyLogin />} />
          <Route path="/Customerdash" element={<CustomerDash />} />
          <Route path="/Customerprofile" element={<Customerprofile />} />
          <Route path="/CustomerRes" element={<CustomerRes />} />
          <Route path="/CustomerInsdeRes/:id" element={<CustomerInsdeRes />} />
          <Route path="/walkthrough" element={<Walkthrough />} />
          <Route path="/ComDash" element={<ComDash />} />
          <Route path="/ComProfile" element={<ComProfile />} />
          <Route path="/CustomerResFrom" element={<CustomerResFrom />} />
          <Route path="/Comtemp1" element={<Comtemp1 />} />
          <Route path="/Comtemp2" element={<Comtemp2 />} />
          <Route path="/ComRecords" element={<ComRecords />} />
          <Route path="/ComResSelec" element={<ComResSelec />} />
        </Routes>
        {enableNav() && <Footer />}
      </div>
    );
  return (
    <div className="app">
      {enableNav() && <Navigationbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Selection" element={<Selection />} />
        <Route path="/Customerlogin" element={<CustomerLogin />} />
        <Route path="/Companylogin" element={<CompanyLogin />} />
        <Route path="/ComDash" element={<ComDash />} />
        <Route path="/ComResSelec" element={<ComResSelec />} />
      </Routes>
      {enableNav() && <Footer />}
    </div>
  );
};
export default App;
