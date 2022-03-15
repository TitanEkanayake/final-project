import React, { useState } from "react";
import "./CustomerLogin.css";
import { auth } from "../../Firebase_con";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

function CustomerLogin() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [loginEmail, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
        registerUsername
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };

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
                    Email
                  </label>
                  <input
                    required
                    onChange={(event) => {
                      setLoginUsername(event.target.value);
                    }}
                    id="user"
                    type="text"
                    className="input"
                  />
                </div>
                <div className="group">
                  <label for="pass" className="label">
                    Password
                  </label>
                  <input
                    onChange={(event) => {
                      setLoginPassword(event.target.value);
                    }}
                    required
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
                    <input
                      onClick={login}
                      type="submit"
                      className="button"
                      value="Sign In"
                    />
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
                    Username
                  </label>
                  <input
                    onChange={(event) => {
                      setRegisterUsername(event.target.value);
                    }}
                    className="input"
                  />
                </div>
                <div className="group">
                  <label for="pass" className="label">
                    Email Address
                  </label>
                  <input
                    onChange={(event) => {
                      setRegisterEmail(event.target.value);
                    }}
                    id="pass"
                    type="text"
                    className="input"
                  />
                </div>
                <div className="group">
                  <label for="pass" className="label">
                    Password
                  </label>
                  <input
                    onChange={(event) => {
                      setRegisterPassword(event.target.value);
                    }}
                    maxlenth="20"
                    minlenth="6"
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
                  <Link to="/CustomerLogin">
                    <input
                      onClick={register}
                      type="submit"
                      className="button"
                    />
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
export default CustomerLogin;
