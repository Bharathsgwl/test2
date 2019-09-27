import React from "react";
import CardComponent from "../commonComponents/CardComponent";
import Header from "../commonComponents/Header";
import Cards from "../commonComponents/Cards";
import TextFields from "../commonComponents/TextFields";
import ButtonComponent from "../commonComponents/ButtonComponent";
import hoc from "../commonComponents/HocComponent";
import Flexi from '../Flexi';
const  flexConfigForHome= {
   items: [
     {
       type: "Card",
       props: {
         label: "Good work labs",
         horozintalAlign: "left",
         color:"red"
       }
     },
     {
       type: "Header",
       props: {
         label: "Technology",
         horozintalAlign: "left"
       }
     },
     {
       type: "Card",
       props: {
         color: "grey"
       },
       children: {
         items: [
           {
             type: "Cards",
             props: {
               cards: [
                 {
                   label: "Java",
                   horizontalAlign: "center",
                   verticalAlign: "center",
                   color: "orange"
                 },
                 {
                   label: "React",
                   horizontalAlign: "center",
                   verticalAlign: "center",
                   color: "blue"
                 },
                 {
                   label: "Node",
                   horizontalAlign: "center",
                   verticalAlign: "center",
                   color: "pink"
                 }
               ]
             }
           }
         ]
       }
     },
     {
       type: "Header",
       props: {
         label: "Drop Message",
         horozintalAlign: "center",
         backgroundColor:"red"
       }
     },
     {
       type: "Card",
       props: {
         color: "grey",
         horizontalAlign: "center",
         textAlign: "center"
       },
       children: {
         items: [
           {
             type: "TextField",
             props: {
               inputType: "text",
               label: "Name",
               name: "name"
             }
           },
           {
             type: "TextField",
             props: {
               inputType: "email",
               label: "Email",
               name: "email"
             }
           },
           {
             type: "TextField",
             props: {
               inputType: "number",
               label: "Mobile",
               name: "Message"
             }
           },
           {
             type: "Button",
             props: {
               label: "Submit"
             }
           }
         ]
       }
     }
   ]
 }

class Home extends React.Component {
  render() {
    const { config, handleFieldChange, handleOnSubmit } = this.props;
    console.log(this.props,"home1");
return(
   <div>
 <Flexi items={config.items} handleFieldChange={handleFieldChange} handleOnSubmit={handleOnSubmit}/>
   </div>

)
  }
}
export default hoc(flexConfigForHome)(Home);
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
