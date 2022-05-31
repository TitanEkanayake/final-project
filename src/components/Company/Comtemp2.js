import React, { useEffect, useState } from "react";
import styles from "./Comtemp2.module.css";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TimePicker from "react-bootstrap-time-picker";
import { timeFromInt } from "time-number";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase/Firebase_con";
import { query, collection, getDocs, where, addDoc } from "firebase/firestore";

const Comtemp2 = () => {
  const [user] = useAuthState(auth);
  const uid = user ? user.uid : null;
  const { cardid, id, Sname, date, time, totime } = useParams();
  const [value, setValue] = React.useState(new Date());
  const [tvalue, settValue] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [number, setnumber] = useState("");
  const [cName, setCname] = useState("");
  const usersCollectionRef = collection(db, "bookings");
  const navigate = useNavigate();
  value.toString();

  // company
  const cData = async () => {
    try {
      const q = query(collection(db, "company"), where("uid", "==", id));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setCname(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  // fetching data
  const fetchData = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      setEmail(data.email);
      setAddress(data.address);
      setnumber(data.number);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    fetchData();
    cData();
  });

  // create
  const create = async () => {
    if ((!number, !address)) alert("Please Update your Profile!");
    else {
      try {
        await addDoc(usersCollectionRef, {
          name: name,
          address: address,
          uid,
          date: value,
          time: timeFromInt(tvalue, { format: 12 }),
          email: email,
          number: number,
          Companyname: cName,
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
    <>
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
              <h4 className="form-header">Name</h4>
              <div className={styles.form_group}>
                <div className="col-md-3">
                  <input value={name} className="form-control" />
                </div>
                <br />
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
              </div>
              <div className={styles.form_group}>
                <label className="control-label col-md-2">Email</label>
                <div className="col-md-7">
                  <input
                    value={email}
                    className="form-control"
                    placeholder="E-mail"
                    type="email"
                  />
                </div>
              </div>
              <br />
              <div className={styles.form_group}>
                <label className="control-label col-md-2">Address</label>
                <div className="col-md-7">
                  <input className="form-control" value={address} />
                </div>
              </div>
              <br />
              <div className={styles.form_group}>
                <label className="control-label col-md-2">Contact Number</label>
                <div className="col-md-7">
                  <input
                    className="form-control"
                    placeholder="Phone (xxx)-xxx xxxx"
                    value={number}
                  />
                </div>
              </div>
              <br />
              <div className={styles.button}>
                <div className="col-md-6 col-md-offset-2">
                  <button
                    type="button"
                    onClick={create}
                    className="btn btn-primary"
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
    </>
  );
};
export default Comtemp2;
