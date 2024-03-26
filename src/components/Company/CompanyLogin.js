import React, { useState, useEffect } from "react";
import { auth, logInWithEmailAndPassword } from "../../firebase/Firebase_con";
import "./CompanyLogin.css";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Modal from "../pages/Popup";

function CompanyLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchClaims = async () => {
      const { claims } = await user.getIdTokenResult();
      if (claims?.admin) {
        navigate("/comdash");
      } else {
        alert("User is not a Admin!");
        navigate("/companylogin");
      }
    };
    if (user) fetchClaims();
  }, [user, navigate]);

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
            <label htmlFor="tab-1" className="tab">
              Sign In
            </label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab" />
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    E-mail
                  </label>
                  <input
                    id="user"
                    type="text"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    className="input"
                    data-type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="group">
                  <input
                    type="submit"
                    className="button"
                    value="Sign In"
                    onClick={() => logInWithEmailAndPassword(email, password)}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CompanyLogin;
