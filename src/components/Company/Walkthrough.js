import { React, useState } from "react";
import styles from "./Walkthrough.module.css";
import { Link } from "react-router-dom";

const Walkthrough = () => {
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
            <h4 className="form-header">Fill The From</h4>
            <div className={styles.previewComponent}>
              {selectedImage && (
                <div className={styles.preview}>
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    className={styles.image}
                    alt="Thumb"
                  />
                  <button
                    onClick={removeSelectedImage}
                    className={styles.delete}
                  >
                    Remove
                  </button>
                </div>
              )}
              <input accept="image/*" type="file" onChange={imageChange} />
            </div>
            <br />
            <div className={styles.form_group}>
              <label className="control-label col-md-2">Coampany Type</label>
              <div className="col-md-1">
                <select required className="form-control">
                  <option>Common Company</option>
                  <option>Medical</option>
                </select>
              </div>
              <br />
              <label className="control-label col-md-2">
                Public or Private
              </label>
              <div className="col-md-1">
                <select required className="form-control">
                  <option>Private</option>
                  <option>Public</option>
                </select>
              </div>
              <br />
              <div className="col-md-3">
                <input
                  required
                  className="form-control"
                  maxlenth="20"
                  minlenth="2"
                  placeholder="Company Sector"
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
            </div>
            <div className={styles.form_group}>
              <label className="control-label col-md-2">
                Company Age and start date
              </label>
              <br />
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
              <br />
            </div>
            <div className="buttonp">
              <div className="col-md-6 col-md-offset-2">
                <Link to="/ComDash">
                  <button type="button" className="btn btn-primary">
                    Next
                  </button>
                </Link>
              </div>
            </div>
            <br />
            <div className="buttonp">
              <Link to="/companylogin">
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
export default Walkthrough;
