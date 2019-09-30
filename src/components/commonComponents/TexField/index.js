import React from "react";
import { TextField } from "@material-ui/core";
const TexField = props => {
  const { data, list, handleFieldChange } = props;
  console.log(data.name);
  console.log(props,"TextField");
  debugger;
  return (
    <div>
    <label>{data.label}:</label>
    <br/>
      <TextField
        id="outlined-email-input"
        label={data.label}
        type={data.inputType}
        onChange={handleFieldChange}
        name={data.name}
        margin="normal"
        variant="outlined"
      />
    </div>
  );
};
export default TexField;
// <TextField
//     id="outlined-email-input"
//     label={data.label}
//     type={data.inputType}
//     value={}
//     onChange={handleChange}
// <label>{data.label}:</label>
// <input
//   type={data.inputType}
//   name={data.name}
//   onChange={props.handleChange}
// />
//     name={data.name}
//     margin="normal"
//     variant="outlined"
//   />
