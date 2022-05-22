import React, { useEffect, useState } from "react";
import styles from "./ComProfile.module.css";
import { useForm } from "react-hook-form";
import { auth, db } from "../../firebase/Firebase_con";
import { updateUserDocument } from "../../firebase/Firebase_con";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, onSnapshot } from "firebase/firestore";

const ComProfile = () => {
  const { register, setValue, handleSubmit } = useForm();
  const [userDocument, setUserDocument] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const docRef = doc(db, "company", user.uid);
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
  }, [user.uid, setValue]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await updateUserDocument({ uid: user?.uid, ...data });
      alert("Updated!");
    } catch (error) {
      console.log(error);
      alert("Theres a error!");
    } finally {
      setLoading(false);
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
            <h4 className={styles.form_header}>Fill The From</h4>
            <br />
            <div className={styles.previewComponent} />
            <div className={styles.form_group}>
              <label className="control-label col-md-2">Name</label>
              <div className="col-md-3">
                <input
                  required
                  className="form-control"
                  {...register("name")}
                />
              </div>
            </div>
            <br />
            <div className={styles.form_group}>
              <label className="control-label col-md-2">Address</label>
              <div className="col-md-7">
                <input
                  required
                  className="form-control"
                  {...register("address")}
                />
              </div>
            </div>
            <br />
            <div className={styles.form_group}>
              <div className="col-md-7 col-md-offset-2">
                <label className="control-label col-md-2">Contact Number</label>
                <input
                  required
                  className="form-control"
                  placeholder="Phone (xxx)-xxx xxxx"
                  {...register("number")}
                />
              </div>
            </div>
            <br />
            <div className={styles.form_group}>
              <div className="col-6">
                <label className="control-label col-md-2">
                  Company Description
                </label>
                <textarea
                  className="form-control"
                  rows="5"
                  {...register("description")}
                />
              </div>
            </div>
            <br />
            <div className={styles.button}>
              <div className="col-md-6 col-md-offset-2">
                <button type="submit" className="btn btn-primary">
                  Update Profile
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
export default ComProfile;
