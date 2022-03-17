import React, { useState } from "react";
import styles from "./Comtemp1.module.css";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Stack from "@mui/material/Stack";

export const Comtemp1 = () => {
  const [value, setValue] = React.useState(new Date());
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
            <div className={styles.form_group}>
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
            </div>
            <div className={styles.form_group}>
              <label className="control-label col-md-2">Date of birth</label>
              <br />
              <div className="col-md-2">
                <input required className="form-control" type="date" />
              </div>
              <br />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <DateTimePicker
                    renderInput={(params) => <TextField {...params} />}
                    label="Select a date"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    minDate={new Date("2020-02-14")}
                    minTime={new Date(0, 0, 0, 8)}
                    maxTime={new Date(0, 0, 0, 18, 45)}
                  />
                </Stack>
              </LocalizationProvider>
              <br />
              <label className="control-label col-md-2">Hospital Branch</label>
              <div className="col-md-1">
                <select required className="form-control">
                  <option>Colombo</option>
                  <option>Kandy</option>
                </select>
              </div>
              <br />
              <label className="control-label col-md-2">Doctor</label>
              <div className="col-md-1">
                <select required className="form-control">
                  <option>Jayasooriya</option>
                  <option>Fernando</option>
                </select>
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
                  type="tel"
                  placeholder="Phone (xxx)-xxx xxxx"
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
export default Comtemp1;
