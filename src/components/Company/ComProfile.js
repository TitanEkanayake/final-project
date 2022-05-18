import { React, useState } from "react";
import styles from "./ComProfile.module.css";
import { Link } from "react-router-dom";
import { storage } from "../../firebase/Firebase_con";

const ComProfile = () => {
  const [image, setImage] = useState(null);

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  //imagedb
  const imageUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "stage_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            //console.log(url);
          });
      }
    );
  };
  console.log("image: ", image);

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeimage = () => {
    setImage();
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
            <br />
            <div className={styles.previewComponent}>
              {image && (
                <div className={styles.preview}>
                  <img
                    src={URL.createObjectURL(image)}
                    className={styles.image}
                    alt="Thumb"
                  />
                  <button onClick={removeimage} className={styles.delete}>
                    Remove
                  </button>
                </div>
              )}
              <input accept="image/*" type="file" onChange={imageChange} />
            </div>
            <div className={styles.form_group}>
              <label className="control-label col-md-2">Name</label>
              <div className="col-md-1">
                <select required className="form-control">
                  <option>Mr</option>
                  <option>Mrs</option>
                </select>
              </div>
              <div className="col-md-3">
                <input
                  required
                  className="form-control"
                  maxlenth="20"
                  minlenth="2"
                  placeholder="First Name"
                />
              </div>
              <div className="col-md-3">
                <input
                  required
                  className="form-control"
                  maxlenth="20"
                  minlenth="2"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <br />
            <div className={styles.form_group}>
              <label className="control-label col-md-2">Age</label>

              <div className="col-md-2">
                <input
                  required
                  className="form-control"
                  type="number"
                  placeholder=" years"
                  min={0}
                />
              </div>
              <br />
              <div className="col-md-2">
                <input required className="form-control" type="date" />
              </div>
            </div>
            <br />
            <div className={styles.form_group}>
              <label className="control-label col-md-2">Address</label>
              <div className="col-md-7">
                <input
                  required
                  className="form-control"
                  placeholder="Address"
                  type="text"
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
                />
              </div>
            </div>
            <br />
            <div className={styles.button}>
              <div className="col-md-6 col-md-offset-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={imageUpload}
                >
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
