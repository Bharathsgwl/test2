import React, { Component } from "react";
import { Card } from "@material-ui/core";
class Cards extends Component {
  render() {
    let { data, styleObj } = this.props;
    let color = data.label;
    console.log(color, "color");
    debugger;
    return (
      <div className="card" >
        {data.cards.map((item, index) => (
          <div style={{ color: item.color }}>
        {item.label}
          </div>
        ))}
      </div>
    );
  }
}

export default Cards;
