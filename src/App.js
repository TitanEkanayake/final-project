import React, { useEffect } from "react";
import { auth } from "./firebase/Firebase_con";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/pages/Home";
import Aboutus from "./components/pages/Aboutus";
import Navigationbar from "./components/layouts/Navigationbar";
import Footer from "./components/layouts/Footer";
import Contactus from "./components/pages/Contactus";
import Selection from "./components/pages/Selection";
import CustomerLogin from "./components/users/CustomerLogin";
import CompanyLogin from "./components/Company/CompanyLogin";
import CustomerDash from "./components/users/CustomerDash";
import { useLocation } from "react-router-dom";
import Customerprofile from "./components/users/Customerprofile";
import Dashnav from "./components/layouts/Dashnav";
import CustomerRes from "./components/users/CustomerRes";
import CustomerInsdeRes from "./components/users/CustomerInsdeRes";
import Walkthrough from "./components/Company/Walkthrough";
import Compside from "./components/layouts/Compside";
import { ComDash } from "./components/Company/ComDash";
import ComProfile from "./components/Company/ComProfile";
import Comtemp1 from "./components/Company/Comtemp1";
import Comtemp2 from "./components/Company/Comtemp2";
import ComRecords from "./components/Company/ComRecords";
import ComResSelec from "./components/Company/ComResSelec";
import ComUpdateForm from "./components/Company/ComUpdateForm";
import RecordSelec from "./components/Company/RecordSelec";

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
  "Comtemp1",
  "Comtemp2",
];
const sideEnabled2 = [
  "ComDash",
  "ComProfile",
  "ComRecords",
  "ComResSelec",
  "RecordSelec",
];

const App = () => {
  const { pathname } = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClaims = async () => {
      const { claims } = await user.getIdTokenResult();
      // if(claims?.admin)
    };

    if (user) fetchClaims();
  }, [user]);

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
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Customerdash" element={<CustomerDash />} />
          <Route path="/Customerprofile" element={<Customerprofile />} />
          <Route path="/CustomerRes" element={<CustomerRes />} />
          <Route path="/CustomerInsdeRes/:id" element={<CustomerInsdeRes />} />
          <Route path="/walkthrough" element={<Walkthrough />} />
          <Route path="/ComDash" element={<ComDash />} />
          <Route path="/ComProfile" element={<ComProfile />} />
          <Route path="/Comtemp1/:cardid/:id/:Sname/" element={<Comtemp1 />} />
          <Route path="/Comtemp2" element={<Comtemp2 />} />
          <Route path="/ComRecords" element={<ComRecords />} />
          <Route path="/ComResSelec/:id" element={<ComResSelec />} />
          <Route path="/Selection" element={<Selection />} />
          <Route path="/Customerlogin" element={<CustomerLogin />} />
          <Route path="/Companylogin" element={<CompanyLogin />} />
          <Route path="/Compupdateform/:id" element={<ComUpdateForm />} />
          <Route path="/RecordSelec" element={<RecordSelec />} />
        </Routes>
        {enableNav() && <Footer />}
      </div>
    );
  return (
    <div className="app">
      {enableNav() && <Navigationbar />}
      {enableside() && <Dashnav />}
      {enableside2() && <Compside />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/Selection" element={<Selection />} />
        <Route path="/Customerlogin" element={<CustomerLogin />} />
        <Route path="/Companylogin" element={<CompanyLogin />} />
      </Routes>
      {enableNav() && <Footer />}
    </div>
  );
};
export default App;
