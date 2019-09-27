import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
const Header = props => {
  let { data } = props;
  debugger;

  return (
    <div style={{textAlign:data.textAlign}}>

        <label>{data.label}</label>

    </div>
  );
};
export default Header;
