import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Aboutus from "./components/pages/Aboutus";
import Navigationbar from "./components/layouts/Navigationbar";
import Footer from "./components/layouts/Footer";
import Contactus from "./components/pages/Contactus";
import Selection from "./components/pages/Selection";
import CustomerLogin from "./components/pages/CustomerLogin";
import CompanyLogin from "./components/pages/CompanyLogin";
import CustomerDash from "./components/pages/CustomerDash";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Navigationbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/Contactus" element={<Contactus />} />
            <Route path="/selection" element={<Selection />} />
            <Route path="/CustomerLogin" element={<CustomerLogin />} />
            <Route path="/Companylogin" element={<CompanyLogin />} />
            <Route path="/Customerdash" element={<CustomerDash />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;
