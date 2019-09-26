import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
const Header = props => {
  let { data } = props;
  debugger;

  return (
    <div>
      <Typography variant="h6" color="inherit">
        {data.label}
      </Typography>
    </div>
  );
};
export default Header;
