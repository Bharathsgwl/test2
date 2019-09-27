import React from "react";
import Flexi from '../Flexi';
import hoc from "../commonComponents/HocComponent";
class Register extends React.Component {
  render(){
let {register,handleFieldChange,handleOnSubmit}=this.props;
console.log(register ,"items");
    return(
<Flexi items={register} handleFieldChange={handleFieldChange} handleOnSubmit={handleOnSubmit} />
    )
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
