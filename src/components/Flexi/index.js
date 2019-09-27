import React from "react";
import Header from "../commonComponents/Header";
import CardComponent from "../commonComponents/CardComponent";
import Cards from "../commonComponents/Cards";
import TextFields from "../commonComponents/TextFields";
import RadioButtons from "../commonComponents/RadioButtons";
import ButtonComponent from "../commonComponents/ButtonComponent";
class Flexi extends React.Component {
  render() {
    const {
      items,
      flexConfigForRegistration,
      handleFieldChange,
      list,
      handleOnSubmit
    } = this.props;
    console.log(items, "flexi");
    const renderField = items => {
      let childrens = "children" in items;
      console.log(items, "renderField");
      switch (items.type) {
        case "Header":
          return <Header data={items.props} />;
        case "Card":
          if (childrens) {
            return (
              <CardComponent data={items.props}>
                {items.children.items.map((child,index) => {
                  return <div key={index}>{renderField(child)}</div>;
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
              handleFieldChange={handleFieldChange}
              list={list}
            />
          );
        case "Cards":
          console.log(items.props);
          return <Cards data={items.props} />;
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

    return (
      <div>
        {items.map(items => {
          return renderField(items);
        })}
      </div>
    );
  }
}
export default Flexi;
