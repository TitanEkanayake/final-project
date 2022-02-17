import React, { Component } from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import v1 from "../../assets/videos/v1.mp4";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="hero-container">
        <video autoPlay loop muted>
          <source src={v1} type="video/MP4" />
        </video>
        <h1>Future Reservation AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
          <Link to="/Selection">
            <Button>GET STARTED</Button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Home;
