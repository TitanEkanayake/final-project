import React, { useState, useCallback } from "react";
import "./CustomerLogin.css";
import { auth } from "../../Firebase_con";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import Popup from "./Popup";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function CustomerLogin() {
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
    } catch (e) {
      alert(e.message);
    }
  }, []);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [loginEmail, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const [initialTab, setInitialTab] = useState(true);
  let navigate = useNavigate();

  const register = async () => {
    if (!registerEmail || !registerPassword || !Firstname || !Lastname) {
      return alert("Values are empty!");
    }

    try {
      const cred = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
        Firstname,
        Lastname
      );
      await cred.user.updateProfile({
        displayName: Firstname,
      });

      navigate("/Customerdash");
    } catch (error) {
      alert(error);
      console.log(error.message);
    }
  };
  const login = async () => {
    console.log(loginEmail, loginPassword);
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      navigate("/Customerdash");
    } catch (error) {
      alert(error);
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
              checked={initialTab}
              onChange={(e) => setInitialTab(e.target.checked)}
            />
            <label for="tab-1" className="tab">
              Sign In
            </label>
            <input
              id="tab-2"
              type="radio"
              name="tab"
              className="sign-up"
              checked={!initialTab}
              onChange={(e) => setInitialTab(!e.target.checked)}
            />
            <label for="tab-2" className="tab">
              Sign Up
            </label>
            <div className="login-form">
              <div className="sign-in-htm" onSubmit={handleSubmit}>
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
                  <input
                    onClick={login}
                    type="submit"
                    className="button"
                    value="Sign In"
                  />
                </div>
                <div className="hr" />
                <div className="foot-lnk">
                  <input
                    className="button"
                    type="button"
                    value="Forget password?"
                    onClick={togglePopup}
                  />
                  {isOpen && (
                    <Popup
                      content={
                        <>
                          <b> E-mail</b>
                          <div>
                            <input id="user" type="emai" className="input1" />
                          </div>
                          <br />

                          <button className="button">Submit</button>
                        </>
                      }
                      handleClose={togglePopup}
                    />
                  )}
                </div>
              </div>
              <div className="sign-up-htm">
                <div className="group">
                  <label for="user" className="label">
                    First Name
                  </label>
                  <input
                    onChange={(event) => {
                      setFirstname(event.target.value);
                    }}
                    className="input"
                  />
                </div>
                <div className="group">
                  <label for="user" className="label">
                    LastName
                  </label>
                  <input
                    onChange={(event) => {
                      setLastname(event.target.value);
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
