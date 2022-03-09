import React, { Component } from "react";
import styles from "./Walkthrough.module.css";
import { Link } from "react-router-dom";

class Walkthrough extends Component {
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
      $imagePreview = <div className="previewText">Profile Picture</div>;
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
            <form className={styles.form_horizontal}>
              <h4 className="form-header">Fill The From</h4>
              <div className="previewComponent">
                <form onSubmit={(e) => this._handleSubmit(e)}>
                  <input
                    className="fileInput"
                    type="file"
                    onChange={(e) => this._handleImageChange(e)}
                  />
                </form>
                <div className={styles.imgPreview}>{$imagePreview}</div>
              </div>
              <br />
              <div className={styles.form_group}>
                <label className="control-label col-md-2">Coampany Type</label>
                <div className="col-md-1">
                  <select required className={styles.form_control}>
                    <option>Common Company</option>
                    <option>Medical</option>
                  </select>
                </div>
                <br />
                <label className="control-label col-md-2">
                  Public or Private
                </label>
                <div className="col-md-1">
                  <select required className={styles.form_control}>
                    <option>Private</option>
                    <option>Public</option>
                  </select>
                </div>
                <br />
                <div className="col-md-3">
                  <input
                    required
                    className={styles.form_control}
                    maxlenth="20"
                    minlenth="2"
                    placeholder="Company Sector"
                  />
                </div>
                <br />
                <div className="col-md-3">
                  <input
                    required
                    className={styles.form_control}
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
                    className={styles.form_control}
                    type="number"
                    placeholder=" years"
                    min={0}
                  />
                </div>
                <br />
                <div className="col-md-2">
                  <input required className={styles.form_control} type="date" />
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
  }
}
export default Walkthrough;
