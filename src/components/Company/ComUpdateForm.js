import React, { useEffect, useState } from "react";
import styles from "./Walkthrough.module.css";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../../firebase/Firebase_con";
import { Link, useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";

const ComUpdateForm = () => {
  const [user] = useAuthState(auth);
  const { register, setValue, handleSubmit } = useForm();
  const [userDocument, setUserDocument] = useState(null);
  // const [isLoading, setLoading] = useState(false);
  const { id } = useParams();
  const uid = user ? user.uid : null;

  useEffect(() => {
    const docRef = doc(db, "company", uid, "service", id);
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists) {
        const documentData = doc.data();
        setUserDocument(documentData);
        for (const [key, value] of Object.entries(documentData)) {
          setValue(key, value);
        }
      }
    });
    return unsubscribe;
  }, [id, setValue, uid]);

  const updateUserDocument = async (data) =>
    updateDoc(doc(db, "company", uid, "service", id), data);

  const onSubmit = async (data) => {
    try {
      await updateUserDocument({ id: id, ...data });
      alert("Updated!");
    } catch (error) {
      console.log(error);
      alert("Theres a error!");
    } finally {
      console.log("done");
    }
  };

  if (!userDocument) {
    return null;
  }

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
          <form
            className={styles.form_horizontal}
            onSubmit={handleSubmit(onSubmit)}
          >
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
                  {...register("name")}
                />
              </div>
              <br />
            </div>
            <div className={styles.form_group}>
              <label className="control-label col-md-2">Date</label>
              <input
                className="form-control"
                type="date"
                {...register("date")}
              />
            </div>
            <br />
            <div className={styles.form_group}>
              <label className="control-label col-md-2">Time</label>
              <input
                className="form-control"
                type="time"
                {...register("time")}
              />
              <input
                className="form-control"
                type="time"
                {...register("toTime")}
              />
            </div>
            <br />
            <div className={styles.form_group}>
              <label className="control-label col-md-2">Discription</label>
              <div className="col-md-7">
                <textarea
                  className="form-control"
                  placeholder="Discription"
                  rows={5}
                  {...register("Description")}
                />
              </div>
            </div>
            <br />
            <div className={styles.button}>
              <div className="col-md-6 col-md-offset-2">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
            <br />
            <div className={styles.button}>
              <Link to="/ComDash">
                <button type="button" className="btn btn-danger">
                  Back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ComUpdateForm;
