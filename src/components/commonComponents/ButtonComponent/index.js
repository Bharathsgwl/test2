import React from "react";
import { Button } from "@material-ui/core";
import hoc from "../HocComponent";
class ButtonComponent extends React.Component {
  render() {
    let { data,handleOnSubmit } = this.props;

    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.props.handleOnSubmit}>
          {data.label}
        </Button>
      </div>
    );
  }
}
export default hoc()(ButtonComponent);
