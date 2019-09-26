import React from "react";
import CardComponent from "../commonComponents/CardComponent";
import Header from "../commonComponents/Header";
import Cards from "../commonComponents/Cards";
import TextFields from "../commonComponents/TextFields";
import ButtonComponent from "../commonComponents/ButtonComponent";
import hoc from "../commonComponents/HocComponent";
class Home extends React.Component {
  render() {
    const { config, handleFieldChange, handleOnSubmit } = this.props;
    const { items } = config;
    console.log(items, "hoc");

    const renderField = item => {
      let childrens = "children" in item;
      console.log(item, "childhoc");
      switch (item.type) {
        case "Header":
          return <Header data={item.props} />;

        case "Card":
          if (childrens) {
            console.log("clhildrens");
            return (
              <CardComponent data={item.props}>
                {item.children.items.map(child => {
                  return <div>{renderField(child)}</div>;
                })}
              </CardComponent>
            );
          } else {
            return <CardComponent data={item.props} />;
          }
        case "TextField":
          return (
            <TextFields
              data={item.props}
              handleFieldChange={handleFieldChange}
            />
          );

        case "Cards":
          console.log(
            item.props

          );
          return <Cards data={item.props} />;
        case "Button":
          return (
            <ButtonComponent
              data={item.props}
              handleOnSubmit={handleOnSubmit}
            />
          );
        default:
          return "fofo";
      }
    };
    return (
      <div>
        {items.map(item => {
          return renderField(item);
        })}
      </div>
    );
  }
}
export default hoc()(Home);
// if(item.type=="Card"){
//   return(<CardComponent labelname={item.props.label} cardColor={item.props.color} children={item.children} />)
// }
// if(item.type=="Header"){
//    return(<Header labelname={item.props.label}  horizontalAlign={item.props.horizontalAlign}/>)
// }
