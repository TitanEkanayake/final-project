import React from "react";
import styles from "./SuccessfulPopup.module.css";
import "../src/components/pages/Popup.css";

function SuccessfulPopup({ setOpenModaltemp1 }) {
  return (
    <div>
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          <div className={styles.titleCloseBtn}>
            <button
              onClick={() => {
                setOpenModaltemp1(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>Submmited Succesfully</h1>
          </div>
          <div className={styles.body} />
          <div className={styles.footer}>
            <button
              onClick={() => {
                setOpenModaltemp1(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button className={styles.btmcontinue}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SuccessfulPopup;
