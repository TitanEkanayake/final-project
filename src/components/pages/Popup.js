import React from "react";
import "./Popup.css";

function Popup({ setOpenModal }) {
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
            <input id="user" type="emai" className="input1" />
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
            <button className="btmcontinue">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Popup;
