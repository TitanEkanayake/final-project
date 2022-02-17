import React, { Component } from "react";
import "./Selection.css";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

class Selection extends Component {
  render() {
    return (
      <div className="hero-container1">
        <Container>
          <Row>
            <Col>
              <figure className="snip0016">
                <img
                  src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                  alt="sample42"
                />
                <figcaption>
                  <h2>
                    <span>Customer</span>
                  </h2>
                  <p>So you can imagine your fears with less distraction.</p>
                  <Link to="/CustomerLogin"></Link>
                </figcaption>
              </figure>
            </Col>
            <Col>
              <figure className="snip0016">
                <img
                  src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="sample42"
                />
                <figcaption>
                  <h2>
                    <span>Department</span>
                  </h2>
                  <p>
                    At things that don't make sense, we couldn't react to a lot
                    of life.
                  </p>
                  <Link to="/CompanyLogin"></Link>
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
