import React, { useState } from "react";
import styles from "./Comtemp1.module.css";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Stack from "@mui/material/Stack";
import { db } from "../../Firebase_con";
import { collection, addDoc } from "firebase/firestore";
import Modal from "../../SuccessfulPopup";

export const Comtemp1 = () => {
  const [modalOpentemp1, setModalOpentemp1] = useState(false);
  const [value, setValue] = React.useState(new Date());
  const [newFName, setNewFName] = useState("");
  const [newLName, setNewLName] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const usersCollectionRef = collection(db, "ComRecords");

  const create = async () => {
    await addDoc(usersCollectionRef, {
      fname: newFName,
      lname: newLName,
      date: newDate,
      address: newAddress,
      email: newEmail,
      number: newNumber,
    });
  };
  return (
    <div className={styles.bg0}>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
      />
      <link rel="stylesheet" href="style.css" />
      <link
        href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css"
        rel="stylesheet"
      />
      <div className={styles.containerz}>
        <div className={styles.form_c}>
          <form className={styles.form_horizontal}>
            <h4 className={styles.form_header}>Fill The From</h4>
            <div className={styles.form_group}>
              <label className="control-label col-md-2">Name</label>
              <div className="col-md-3">
                <input
                  required
                  className="form-control"
                  maxlenth="20"
                  minlenth="2"
                  placeholder="First Name"
                  onChange={(event) => {
                    setNewFName(event.target.value);
                  }}
                />
              </div>
              <br />
              <div className="col-md-3">
                <input
                  required
                  className="form-control"
                  maxlenth="20"
                  minlenth="2"
                  placeholder="Last Name"
                  onChange={(event) => {
                    setNewLName(event.target.value);
                  }}
                />
              </div>
            </div>
            <br />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack
                spacing={3}
                onChange={(event) => {
                  setNewDate(event.target.value);
                }}
              >
                <DateTimePicker
                  renderInput={(params) => <TextField {...params} />}
                  label="Select a date"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  minDate={new Date("2022-02-14")}
                  minTime={new Date(0, 0, 0, 8)}
                  maxTime={new Date(0, 0, 0, 18, 45)}
                />
              </Stack>
            </LocalizationProvider>
            <br />
            <div className={styles.form_group}>
              <label className="control-label col-md-2">Address</label>
              <div className="col-md-7">
                <input
                  required
                  className="form-control"
                  placeholder="Address"
                  type="text"
                  onChange={(event) => {
                    setNewAddress(event.target.value);
                  }}
                />
              </div>
            </div>

            <br />
            <div className={styles.form_group}>
              <label className="control-label col-md-2">Contact</label>
              <div className="col-md-7">
                <input
                  required
                  className="form-control"
                  placeholder="E-mail"
                  type="email"
                  onChange={(event) => {
                    setNewEmail(event.target.value);
                  }}
                />
              </div>
            </div>

            <br />
            <div className={styles.form_group}>
              <div className="col-md-7 col-md-offset-2">
                <input
                  required
                  className="form-control"
                  placeholder="Phone (xxx)-xxx xxxx"
                  onChange={(event) => {
                    setNewNumber(event.target.value);
                  }}
                />
              </div>
            </div>
            <br />
            <div className={styles.button}>
              <div className="col-md-6 col-md-offset-2">
                <button
                  className="btn btn-primary"
                  // disabled={
                  //   (!newFName, !newLName, !newAddress, !newEmail, !newNumber)
                  // }
                  onClick={() => {
                    // create();
                    setModalOpentemp1(true);
                  }}
                >
                  Submit
                </button>
              </div>
            </div>

            <br />
            <div className={styles.button}>
              <button type="button" className="btn btn-danger">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      {modalOpentemp1 && <Modal setOpenModaltemp1={setModalOpentemp1} />}
    </div>
  );
};
export default Comtemp1;
