import React, { Component } from "react";
import styles from "./Customerprofile.module.css";

class CustomerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "" };
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }
  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    } else {
      $imagePreview = <div className={styles.previewText}>Profile Picture</div>;
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
          <form className={styles.form_horizontal}>
            <h4 className={styles.form_header}>Fill The From</h4>
            <div className={styles.previewComponent}>
              <form onSubmit={(e) => this._handleSubmit(e)}>
                <input
                  className="fileInput"
                  type="file"
                  onChange={(e) => this._handleImageChange(e)}
                />
              </form>
              <div className={styles.imgPreview}>{$imagePreview}</div>
            </div>
            <div className={styles.form_group}>
              <label className="control-label col-md-2">Name</label>
              <div className="col-md-1">
                <select required className="form-control">
                  <option>Mr</option>
                  <option>Mrs</option>
                </select>
              </div>
              <br />
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
            </div>
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
            <div className={styles.form_group}>
              <div className="col-md-7 col-md-offset-2">
                <input
                  required
                  className="form-control"
                  type="number"
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
              <button type="button" className="btn btn-danger">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default CustomerProfile;
