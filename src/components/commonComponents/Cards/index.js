import React, { Component } from "react";
import { Card } from "@material-ui/core";
class Cards extends Component {
  render() {
    let { data, styleObj } = this.props;
    let color = data.label;
    debugger;
    return (
      <div className="card">
        {data.cards.map((item, index) => (
          <Card style={{ color: item.color ,width:"60%",margin:"auto" }} key={index}>
            {item.label}
          </Card>
        ))}
      </div>
    );
  }
}

export default Cards;
