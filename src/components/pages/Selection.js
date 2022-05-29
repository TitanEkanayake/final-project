import React, { Component } from "react";
import "./Selection.css";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

class Selection extends Component {
  render() {
    return (
      <div className="hero-container1">
        <h1>Select your Choice</h1>
        <Container>
          <Row>
            <Col>
              <figure className="snip0016">
                <img
                  src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                  alt="sample42"
                />
                <figcaption>
                  <h1>Customer</h1>
                  <p>Login or Sign up as a Customer</p>
                  <Link to="/CustomerLogin" />
                </figcaption>
              </figure>
            </Col>
            <Col>
              <figure className="snip0016">
                <img
                  src="https://images.unsplash.com/photo-1554232456-8727aae0cfa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                  alt="sample42"
                />
                <figcaption>
                  <h1>Department</h1>
                  <p>Login as Company</p>
                  <Link to="/CompanyLogin" />
                </figcaption>
              </figure>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Selection;
