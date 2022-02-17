import React, { Component } from "react";
import "./CustomerLogin.css";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

class CustomerLogin extends Component {
  render() {
    return (
      <div className="hero-container2">
        <div>
          <div className="login-wrap">
            <div className="login-html">
              <input
                id="tab-1"
                type="radio"
                name="tab"
                className="sign-in"
                checked
              />
              <label for="tab-1" className="tab">
                Sign In
              </label>
              <input id="tab-2" type="radio" name="tab" className="sign-up" />
              <label for="tab-2" className="tab">
                Sign Up
              </label>
              <div className="login-form">
                <div className="sign-in-htm">
                  <div className="group">
                    <label for="user" className="label">
                      Username
                    </label>
                    <input id="user" type="text" className="input" />
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      Password
                    </label>
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                    />
                  </div>
                  <div className="group">
                    <Form>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Keep me Signed in"
                      />
                    </Form>
                  </div>
                  <div className="group">
                    <Link to="/CustomerDash">
                      <input type="submit" className="button" value="Sign In" />
                    </Link>
                  </div>
                  <div className="hr"></div>
                  <div className="foot-lnk">
                    <a href="#forgot">Forgot Password?</a>
                  </div>
                </div>
                <div className="sign-up-htm">
                  <div className="group">
                    <label for="user" className="label">
                      Username
                    </label>
                    <input id="user" type="text" className="input" />
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      Password
                    </label>
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                    />
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      Repeat Password
                    </label>
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                    />
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      Email Address
                    </label>
                    <input id="pass" type="text" className="input" />
                  </div>
                  <div className="group">
                    <input type="submit" className="button" value="Sign Up" />
                  </div>
                  <div className="hr"></div>
                  <div className="foot-lnk">
                    <label for="tab-1">Already Member?</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CustomerLogin;
