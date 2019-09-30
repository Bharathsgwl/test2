import React, { Component } from "react";
import { Card } from "@material-ui/core";
class CardC extends Component {
  render() {
    var { data } = this.props;
    let color = data.color;
    let textAlign = data.textAlign;

    debugger;
    const children = React.Children.map(this.props.children, child => {
      return <div>{child}</div>;
    });

    debugger;
    return (
      <div>
        <div style={{ color: "black", textAlign: textAlign }}>
          <Card style={{ width: "80%", margin: "auto", color: color}}>
            <label style={{ textAlign: textAlign }}>{data.label}</label>
            {children}
          </Card>
        </div>
      </div>
    );
  }
}

export default CardC;

// {items.map(itemname=>{
//   if(itemname.type=="TextField"){
// return ( <TextFields  label={itemname.props.label} type={itemname.props.inputType} name={itemname.props.name}/>);
// }
// if(itemname.type=="RadioGruop"){
//   return(
//       <RadioButtons  label={itemname.props.label} type={itemname.props.type} name={itemname.props.name} options={itemname.props.options} />
//   )
// }
// if(itemname.type=="Button"){
//   return(
//     <ButtonComponent label={itemname.props.label} />
//   )
// }
//
// })}
// let names = props.data;

// let type = names.items;

// console.log(type)
{
  /* {type.map((data, index) => {
          if (data.type == "TextField") {
              return (
                  <Textfield type={data.props.type} name={data.props.name} label={data.props.label}/>
              )
          }
          if (data.type == "RadioGroup") {
              return (
                  <Radiobtn  type={data.props.type} name={data.props.name} label={data.props.label} options={data.props.options} />
              )
          }
          if (data.type == "Button") {
              return (
                  <Button />
              )
          }
      })
      } */
}
{
  /* <h2>I am card component</h2> */
}
