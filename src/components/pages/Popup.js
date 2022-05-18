import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, sendPasswordReset } from "../../firebase/Firebase_con";
import "./Popup.css";

function Popup({ setOpenModal }) {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading]);
  return (
    <div>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h4>Enter your e-mail</h4>
          </div>
          <div className="body">
            <input
              id="user"
              type="emai"
              className="input1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => sendPasswordReset(email)}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Popup;
