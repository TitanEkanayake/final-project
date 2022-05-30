import React, { useEffect, useState } from "react";
import styles from "./Comtemp1.module.css";
import { Link } from "react-router-dom";
import { db } from "../../firebase/Firebase_con";
import {
  collection,
  addDoc,
  getDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/Firebase_con";
import { useNavigate, useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TimePicker from "react-bootstrap-time-picker";
import { timeFromInt } from "time-number";

export const Comtemp1 = () => {
  const [user] = useAuthState(auth);
  const { cardid, id, Sname, date, time, totime } = useParams();
  const [newEmail, setNewEmail] = useState();
  const [newNumber, setNewnumber] = useState();
  const [value, setValue] = React.useState(new Date());
  const [tvalue, settValue] = useState("");
  const [newName, setNewName] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const uid = user ? user.uid : null;
  const usersCollectionRef = collection(db, "bookings");
  const navigate = useNavigate();
  value.toString();

  const create = async () => {
    if ((!newName, !newAddress)) alert("Please enter name!");
    else {
      try {
        await addDoc(usersCollectionRef, {
          name: newName,
          address: newAddress,
          uid,
          date: value,
          time: timeFromInt(tvalue, { format: 12 }),
          email: newEmail,
          number: newNumber,
          compId: id,
          serviceName: Sname,
          serviceId: cardid,
        });
        alert("Service Added");
        navigate("/Customerdash");
      } catch (error) {
        console.log(error);
        alert("There was a Error");
      }
    }
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
            <h4 className="form-header">Service Details</h4>
            <div className={styles.form_group}>
              <div className="col-md-3">
                <label className="control-label col-md-2">Name</label>
                <input
                  required
                  className="form-control"
                  maxlenth="20"
                  minlenth="2"
                  placeholder=" Name"
                  onChange={(event) => {
                    setNewName(event.target.value);
                  }}
                />
              </div>
              <br />
            </div>
            <label className="control-label col-md-2">Date</label>
            <br />
            <div className={styles.form_group}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Basic example"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  minDate={new Date(date)}
                />
              </LocalizationProvider>
            </div>
            <br />
            <div className={styles.form_group}>
              <label className="control-label col-md-2">Time</label>
              <div className="col-md-7">
                <TimePicker
                  start={time}
                  end={totime}
                  step={30}
                  value={tvalue}
                  onChange={(newValue) => {
                    settValue(newValue);
                  }}
                />
              </div>
            </div>
            <br />
            <div className={styles.form_group}>
              <label className="control-label col-md-2">Address</label>
              <div className="col-md-7">
                <input
                  className="form-control"
                  placeholder="Address"
                  onChange={(event) => {
                    setNewAddress(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className={styles.form_group}>
              <label className="control-label col-md-2">Email</label>
              <div className="col-md-7">
                <input
                  className="form-control"
                  placeholder="***@gmail.com"
                  onChange={(event) => {
                    setNewEmail(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className={styles.form_group}>
              <label className="control-label col-md-2">Contact Number</label>
              <div className="col-md-7">
                <input
                  className="form-control"
                  placeholder="Phone (xxx)-xxx xxxx"
                  onChange={(event) => {
                    setNewnumber(event.target.value);
                  }}
                />
              </div>
            </div>
            <br />
            <div className={styles.button}>
              <div className="col-md-6 col-md-offset-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={create}
                >
                  Submit
                </button>
              </div>
            </div>
            <br />
            <div className={styles.button}>
              <Link to="/Customerdash">
                <button type="button" className="btn btn-danger">
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Comtemp1;
