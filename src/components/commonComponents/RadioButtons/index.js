import React from "react";
import { Typography } from "@material-ui/core";
const RadioButtons = props => {
  const { data } = props;

  let { options } = data;
  return (
    <div>
      <Typography variant="h6" color="inherit">
        {data.label}:
      </Typography>

      <div>
        {options.map(option => {
          return (
            <React.Fragment>
              <input name={data.name} type="radio" value={option.label} onChange={props.handleFieldChange} />
              {option.label}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
export default RadioButtons;
// {options.map(option=>{
//     return  (
//   <React.Fragment>
// <input name={option.name} type="radio" value={option.label} />{option.label}
// </React.Fragment>
// );
// })
// }