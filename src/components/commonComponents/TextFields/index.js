import React from "react";
import RadioButtons from "../RadioButtons";
import ButtonComponent from "../ButtonComponent";
import { TextField } from "@material-ui/core";
const TextFields = props => {
  const { data, list,handleFieldChange } = props;
  console.log(data.name);
  debugger;
  return (
    <div>

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
export default TextFields;
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