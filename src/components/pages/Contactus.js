import React, { useState } from "react";
import styles from "../Company/Comtemp2.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase/Firebase_con";
import { collection, addDoc } from "firebase/firestore";

const Contactus = () => {
  const [user] = useAuthState(auth);
  const uid = user ? user.uid : null;
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const usersCollectionRef = collection(db, "Contactus");
  const navigate = useNavigate();

  // create
  const create = async () => {
    if ((!subject, !description)) alert("Please Fill the Form!");
    else {
      try {
        await addDoc(usersCollectionRef, {
          name: subject,
          address: description,
          uid,
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
              <h1>Fill the form</h1>
              <br />
              <div className={styles.form_group}>
                <label className="control-label col-md-2">Subject</label>
                <div className="col-md-7">
                  <input
                    className="form-control"
                    onChange={(event) => {
                      setSubject(event.target.value);
                    }}
                  />
                </div>
              </div>
              <br />
              <div className={styles.form_group}>
                <div className="col-6">
                  <label className="control-label col-md-2">Description</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
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
export default Contactus;
