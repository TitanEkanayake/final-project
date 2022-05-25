import React, { useEffect, useState } from "react";
import styles from "./Customerprofile.module.css";
import { useForm } from "react-hook-form";
import { auth, db } from "../../firebase/Firebase_con";
import { updateUserDocument } from "../../firebase/Firebase_con";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { ProfileImage } from "./ProfileImage";

const CustomerProfile = () => {
  const { register, setValue, handleSubmit } = useForm();
  const [userDocument, setUserDocument] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const docRef = doc(db, "users", user.uid);
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
    } finally {
      setLoading(false);
    }
  };

  if (!userDocument) {
    return null;
  }

  return (
    <div className={styles.containerz}>
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

      <div className={styles.form_c}>
        <form
          className={styles.form_horizontal}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h4 className={styles.form_header}>Profile</h4>
          <div className={styles.previewComponent}>
            <ProfileImage id={user?.uid} />
          </div>
          <div className={styles.form_group}>
            <div className="col-md-3">
              <label>
                Name
                <input className="form-control" {...register("name")} />
              </label>
            </div>
            <br />
            <label className="control-label col-md-2">Gender</label>
            <div className="col-md-1">
              <select required className="form-control" {...register("gender")}>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="col-md-7">
              <label className="control-label col-md-2">Address</label>
              <input
                className="form-control"
                type="text"
                {...register("address")}
              />
            </div>
          </div>
          <div className={styles.form_group}>
            <div className="col-md-2">
              <label className="control-label col-md-2">Date of birth</label>
              <input
                className="form-control"
                type="date"
                {...register("dob")}
              />
            </div>
            <br />
            <label className="control-label col-md-2">Contact</label>
            <div className="col-md-7">
              <label>
                Email
                <input
                  disabled
                  {...register("email")}
                  className="form-control"
                  placeholder="E-mail"
                  type="email"
                />
              </label>
            </div>
          </div>
          <div className={styles.form_group}>
            <div className="col-md-7 col-md-offset-2">
              <label>
                Mobile Number
                <input
                  className="form-control"
                  type="text"
                  {...register("number")}
                />
              </label>
            </div>
          </div>
          <div className={styles.button}>
            <div className="col-md-6 col-md-offset-2">
              <button type="submit" className="btn btn-primary">
                Update Profile
              </button>
            </div>
          </div>
          <br />
          <div className={styles.button}>
            <Link to="/CustomerDash">
              <button type="button" className="btn btn-danger">
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CustomerProfile;
