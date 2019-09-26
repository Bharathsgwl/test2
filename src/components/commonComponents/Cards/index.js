import React, { Component } from "react";
import { Card } from "@material-ui/core";
class Cards extends Component {
  render() {
    let { data,styleObj } = this.props;
let color=data.color;
    debugger;
    return (
      <div className="card" style={{backgroundColor:color}}>
        {data.cards.map((item, index) => (
          <Card style={{color:color}}>{item.label}
        </Card>
        ))}
      </div>
    );
  }
}

export default Cards;
