import { React, useState } from "react";
import styles from "./Customerprofile.module.css";
import { Link } from "react-router-dom";

const CustomerProfile = () => {
  const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };
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
        <form className={styles.form_horizontal}>
          <h4 className={styles.form_header}>Fill The From</h4>
          <div className={styles.previewComponent}>
            {selectedImage && (
              <div className={styles.preview}>
                <img
                  src={URL.createObjectURL(selectedImage)}
                  className={styles.image}
                  alt="Thumb"
                />
                <button onClick={removeSelectedImage} className={styles.delete}>
                  Remove
                </button>
              </div>
            )}
            <input accept="image/*" type="file" onChange={imageChange} />
          </div>
          <div className={styles.form_group}>
            <label className="control-label col-md-2">Name</label>
            <div className="col-md-3">
              <input
                required
                className="form-control"
                maxlenth="20"
                minlenth="2"
                placeholder="First Name"
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
              />
            </div>
            <br />
            <label className="control-label col-md-2">Gender</label>
            <div className="col-md-1">
              <select required className="form-control">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <label className="control-label col-md-2">Address</label>
            <div className="col-md-7">
              <input
                required
                className="form-control"
                placeholder="Street Address"
                type="text"
              />
              <br />
              <input
                required
                className="form-control"
                maxlenth="20"
                minlenth="2"
                placeholder="City"
              />
            </div>
          </div>
          <div className={styles.form_group}>
            <label className="control-label col-md-2">Date of birth</label>
            <div className="col-md-2">
              <input required className="form-control" type="date" />
            </div>
            <br />

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
          <div className={styles.form_group}>
            <div className="col-md-7 col-md-offset-2">
              <input
                required
                className="form-control"
                type="text"
                placeholder="Phone (xxx)-xxx xxxx"
              />
            </div>
          </div>
          <div className={styles.button}>
            <div className="col-md-6 col-md-offset-2">
              <button type="button" className="btn btn-primary">
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
