import React from "react";
import { Button } from "@material-ui/core";

class Buttons extends React.Component {
  render() {
    let { data,handleOnSubmit } = this.props;
console.log(this.props.data,"button");
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.props.handleOnSubmit}>
{data.label}
        </Button>
      </div>
    );
  }
}
export default Buttons;
