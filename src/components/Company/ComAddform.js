import React, { useState } from "react";
import "./ComAddform.css";

const ComAddform = () => {
  const [formValues, setFormValues] = useState([{ name: "" }]);
  const [formValues1, setFormValues1] = useState([{ nametw: "" }]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };
  let handleChange1 = (i, e) => {
    let newFormValues1 = [...formValues1];
    newFormValues1[i][e.target.nametw] = e.target.value;
    setFormValues1(newFormValues1);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { name: "" }]);
  };
  let addFormFields1 = () => {
    setFormValues1([...formValues1, { nametw: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };
  let removeFormFields1 = (i) => {
    let newFormValues1 = [...formValues1];
    newFormValues1.splice(i, 1);
    setFormValues1(newFormValues1);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };
  let handleSubmit1 = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues1));
  };
  return (
    <div className="ComAddform">
      <div className="formcon">
        <h1>Add your fields</h1>
        <form onSubmit={handleSubmit1}>
          {formValues1.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>Name</label>
              <input
                className="input_box"
                type="text"
                name="name"
                value={element.nametw || ""}
                onChange={(e) => handleChange1(index, e)}
              />

              {index ? (
                <button
                  type="button"
                  className="button remove"
                  onClick={() => removeFormFields1(index)}
                >
                  Remove
                </button>
              ) : null}
            </div>
          ))}
          <div className="button-section">
            <button
              className="button add"
              type="button"
              onClick={() => addFormFields1()}
            >
              Add
            </button>
          </div>
        </form>
        <form onSubmit={handleSubmit}>
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>Name</label>
              <input
                className="input_box"
                type="text"
                name="name"
                value={element.name || ""}
                onChange={(e) => handleChange(index, e)}
              />
              {index ? (
                <button
                  type="button"
                  className="button remove"
                  onClick={() => removeFormFields(index)}
                >
                  Remove
                </button>
              ) : null}
            </div>
          ))}
          <div className="button-section">
            <button
              className="button add"
              type="button"
              onClick={() => addFormFields()}
            >
              Add
            </button>
          </div>
          <div className="button-section">
            <button className="button submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ComAddform;
