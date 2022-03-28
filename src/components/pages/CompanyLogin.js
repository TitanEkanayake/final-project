import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "./CompanyLogin.css";
import { Link } from "react-router-dom";

// exports.setAdminClaims = functions.https.onCall(async (data, context) => {

//   // If necessary check the uid of the caller, via the context object

//   const adminUIDs = ['2jfow4fd3H2ZqYLWZI2s1YdqOPB42', '767fjdhshd3H2ZqYLWZI2suyyqOPB42'];

//   await Promise.all(adminUIDs.map(uid => admin.auth().setCustomUserClaims(uid, { admin: true })));

//   return { result: "Operation completed" }

// })

class CompanyLogin extends Component {
  render() {
    return (
      <div className="hero-containerx">
        <div>
          <div className="login-wrap1">
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
                      Company ID
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
                    <Link to="/ComDash">
                      <input type="submit" className="button" value="Sign In" />
                    </Link>
                  </div>
                  <div className="hr" />
                  <div className="foot-lnk">
                    <a href="#forgot">Forgot Password?</a>
                  </div>
                </div>
                <div className="sign-up-htm">
                  <div className="group">
                    <label for="user" className="label">
                      Company Name
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
                      Company Address
                    </label>
                    <input id="pass" type="text" className="input" />
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      Contact Number
                    </label>
                    <input id="pass" type="text" className="input" />
                  </div>
                  <div className="group">
                    <label for="pass" className="label">
                      Company Email Address
                    </label>
                    <input id="pass" type="text" className="input" />
                  </div>
                  <div className="group">
                    <Link to="/walkthrough">
                      <input type="submit" className="button" value="Sign Up" />
                    </Link>
                  </div>
                  <div className="hr" />
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
export default CompanyLogin;
