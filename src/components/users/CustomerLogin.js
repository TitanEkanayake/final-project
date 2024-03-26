import React, { useState, useEffect } from "react";
import "./CustomerLogin.css";
import {
  auth,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/Firebase_con";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Modal from "../pages/Popup";

function CustomerLogin() {
  const [email, setEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newName, setNewName] = useState("");
  const [user] = useAuthState(auth);
  const [modalOpen, setModalOpen] = useState(false);
  const [initialTab, setInitialTab] = useState(true);
  const navigate = useNavigate();

  const register = () => {
    if (!newName) alert("Please enter name");
    registerWithEmailAndPassword(newName, newEmail, newPassword);
  };

  useEffect(() => {
    const fetchClaims = async () => {
      const { claims } = await user.getIdTokenResult();
      if (claims?.admin) {
        navigate("/comdash");
      } else {
        navigate("/customerdash");
      }
    };

    if (user) fetchClaims();
  }, [user, navigate]);

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
            <label htmlFor="tab-1" className="tab">
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
            <label htmlFor="tab-2" className="tab">
              Sign Up
            </label>
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    Email
                  </label>
                  <input
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="input"
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Password
                  </label>
                  <input
                    required
                    type="password"
                    className="input"
                    data-type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="group">
                  <input
                    onClick={() => logInWithEmailAndPassword(email, password)}
                    type="submit"
                    className="button"
                    value="Sign In"
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    or
                  </label>
                  <input
                    type="submit"
                    className="button"
                    value="Sign In with Google"
                    onClick={signInWithGoogle}
                  />
                </div>
                <div className="hr" />
                <div className="foot-lnk">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => {
                      setModalOpen(true);
                    }}
                  >
                    Forget Password?
                  </button>
                  {modalOpen && <Modal setOpenModal={setModalOpen} />}
                </div>
              </div>
              <div className="sign-up-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    Full Name
                  </label>
                  <input
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="input"
                  />
                </div>
                <div className="group" />
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Email Address
                  </label>
                  <input
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    type="text"
                    className="input"
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Password
                  </label>
                  <input
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    type="password"
                    className="input"
                  />
                </div>
                <div className="group">
                  <input
                    onClick={register}
                    type="submit"
                    className="button"
                    value="Sign Up"
                  />
                </div>
                <div className="group">
                  <input
                    onClick={signInWithGoogle}
                    className="button"
                    type="submit"
                    value="Sign in with Google"
                  />
                </div>
                <div className="hr" />
                <div className="foot-lnk">
                  <label htmlFor="tab-1">Already Member?</label>
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
