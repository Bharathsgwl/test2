import React from "react";
import Header from "../commonComponents/Header";
import CardComponent from "../commonComponents/CardComponent";
import TextFields from "../commonComponents/TextFields";
import RadioButtons from "../commonComponents/RadioButtons";
import ButtonComponent from "../commonComponents/ButtonComponent";
import hoc from "../commonComponents/HocComponent";
class Register extends React.Component {
  render() {
    const { config1, handleFieldChange, list, handleOnSubmit } = this.props;
    const { items } = config1;

    const renderField = items => {
      let childrens = "children" in items;

      switch (items.type) {
        case "Header":
          return <Header data={items.props} />;
        case "Card":
          if (childrens) {
            return (
              <CardComponent data={items.props}>
                {items.children.items.map(child => {
                  return <div>{renderField(child)}</div>;
                })}
              </CardComponent>
            );
          } else {
            return <CardComponent data={items.props} />;
          }
        case "TextField":
          return (
            <TextFields
              data={items.props}
              handleChange={handleFieldChange}
              list={list}
            />
          );
        case "RadioGruop":
          return (
            <RadioButtons
              data={items.props}
              handleFieldChange={handleFieldChange}
            />
          );

        case "Button":
          return (
            <ButtonComponent
              data={items.props}
              handleOnSubmit={handleOnSubmit}
            />
          );
        default:
          return "fofo";
      }
    };
    const renderFields = items.map(item => {
      return renderField(item);
    });
    return (
      <div>
        <div>{renderFields}</div>
      </div>
    );
  }
}
export default hoc()(Register);
// const renderFields = (items) => {
//   console.log(items, "items1");
//   return <div></div>;
//   const renderField = item => {
//     if (item.children == true) {
//       return renderFields;
//     } else {
//       return <CardComponent labelname={item.props.label} />;
//     }
//   };
// };
