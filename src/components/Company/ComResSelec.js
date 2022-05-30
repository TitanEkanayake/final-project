import React, { useState } from "react";
import styles from "./Walkthrough.module.css";
import { Link } from "react-router-dom";
import { db } from "../../firebase/Firebase_con";
import { collection, addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/Firebase_con";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";

const ComResSelec = () => {
  const [user] = useAuthState(auth);
  const [newTime, setNewTime] = useState();
  const [newTime1, setNewTime1] = useState();
  const [newDate, setnewDate] = useState(new Date());
  const [newName, setNewName] = useState("");
  const [newDis, setNewDis] = useState("");
  const uid = user ? user.uid : null;
  const usersCollectionRef = collection(db, "company", uid, "service");
  const navigate = useNavigate();

  const create = async () => {
    if ((!newName, !newDis)) alert("Please enter name!");
    else {
      try {
        await addDoc(usersCollectionRef, {
          name: newName,
          Description: newDis,
          uid,
          date: newDate,
          time: newTime,
          toTime: newTime1,
        });
        alert("Service Added");
        navigate("/comdash");
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
            <div className={styles.form_group}>
              <label className="control-label col-md-2">Date</label>
              <input
                className="form-control"
                type="date"
                onChange={(event) => {
                  setnewDate(event.target.value);
                }}
              />
            </div>
            <br />
            <div className={styles.form_group}>
              <label className="control-label col-md-2">Time</label>
              <TimePicker onChange={setNewTime} value={newTime} />
              <TimePicker onChange={setNewTime1} value={newTime1} />
            </div>
            <br />
            <div className={styles.form_group}>
              <label className="control-label col-md-2">Discription</label>
              <div className="col-md-7">
                <textarea
                  className="form-control"
                  placeholder="Description"
                  rows={5}
                  onChange={(event) => {
                    setNewDis(event.target.value);
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
              <Link to="/ComDash">
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
export default ComResSelec;
