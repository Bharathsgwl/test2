import React from "react";
import CardComponent from "../commonComponents/CardComponent";
import Header from "../commonComponents/Header";
import Cards from "../commonComponents/Cards";
import TextFields from "../commonComponents/TextFields";
import ButtonComponent from "../commonComponents/ButtonComponent";
import hoc from "../commonComponents/HocComponent";
import Flexi from '../Flexi';
class Home extends React.Component {
  render() {
    const { home, handleFieldChange, handleOnSubmit } = this.props;
return(
  <Flexi items={home} handleFieldChange={handleFieldChange} handleOnSubmit={handleOnSubmit}/>
)
  }
}
export default hoc()(Home);
// if(item.type=="Card"){
//   return(<CardComponent labelname={item.props.label} cardColor={item.props.color} children={item.children} />)
// }
// if(item.type=="Header"){
//    return(<Header labelname={item.props.label}  horizontalAlign={item.props.horizontalAlign}/>)
// }
// const { items } = config;
// console.log(items, "hoc");
//
// const renderField = item => {
//   let childrens = "children" in item;
//   console.log(item, "childhoc");
//   switch (item.type) {
//     case "Header":
//       return <Header data={item.props} />;
//
//     case "Card":
//       if (childrens) {
//         console.log("clhildrens");
//         return (
//           <CardComponent data={item.props}>
//             {item.children.items.map(child => {
//               return <div>{renderField(child)}</div>;
//             })}
//           </CardComponent>
//         );
//       } else {
//         return <CardComponent data={item.props} />;
//       }
//     case "TextField":
//       return (
//         <TextFields
//           data={item.props}
//           handleFieldChange={handleFieldChange}
//         />
//       );
//
//
//     case "Button":
//       return (
//         <ButtonComponent
//           data={item.props}
//           handleOnSubmit={handleOnSubmit}
//         />
//       );
//     default:
//       return "fofo";
//   }
// };
// return (
//   <div>
//     {items.map(item => {
//       return renderField(item);
//     })}
//   </div>
// );
