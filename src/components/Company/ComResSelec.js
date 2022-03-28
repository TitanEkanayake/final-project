import React from "react";
import styles from "./Walkthrough.module.css";
import { Link } from "react-router-dom";

const ComResSelec = () => {
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
            <h4 className="form-header">Service Details</h4>
            <div className={styles.form_group}>
              <div className="col-md-3">
                <input
                  required
                  className="form-control"
                  maxlenth="20"
                  minlenth="2"
                  placeholder=" Name"
                />
              </div>
              <br />
              <label className="control-label col-md-2">Form type</label>
              <div className="col-md-1">
                <select required className="form-control">
                  <option>normal</option>
                  <option>medical</option>
                </select>
              </div>
            </div>
            <div className={styles.form_group}>
              <label className="control-label col-md-2">Discription</label>
              <div className="col-md-7">
                <textarea
                  className="form-control"
                  placeholder="Additional comments"
                  rows={5}
                  defaultValue={"          "}
                />
              </div>
            </div>
            <br />
            <div className={styles.button}>
              <div className="col-md-6 col-md-offset-2">
                <button type="button" className="btn btn-primary">
                  Submit
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
export default ComResSelec;