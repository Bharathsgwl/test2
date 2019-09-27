import React from "react";
import Flexi from '../Flexi';
import hoc from "../commonComponents/HocComponent";
const flexConfigForRegistration={
  items: [
    {
      type: "Header",
      props: {
        label: "Registration",
        horozintalAlign: "center",
        verticalAlign:"center"
      }
    },
    {
      type: "Card",
      props: {
        color: "grey",
        horozintalAlign: "left",
      },
      children: {
        items: [
          {
            type: "TextField",
            props:{
              inputType:"text",
              label:"Name",
              name:"name"
            }
          },
          {
            type: "TextField",
            props:{
              inputType:"email",
              label:"Email",
              name:"email"
            }
          },
          {
            type: "TextField",
            props:{
              inputType:"number",
              label:"Mobile",
              name:"Message"
            }
          },
          {
            type: "RadioGruop",
            props:{
              label:"Gender",
              name:"gender",
              options:[
                {
                  label:"Male"
                },
                {
                  label:"Female"
                }
              ]
            }
          },
          {
            type: "TextField",
            props:{
              inputType:"password",
              label:"Password",
              name:"password"
            }
          },
          {
            type: "TextField",
            props:{
              inputType:"password",
              label:"Confirm Password",
              name:"confirmPassword"
            }
          },
          {
            type: "Button",
            props:{
              label:"Register"
            }
          }
        ]
      }
    }
  ]
}
class Register extends React.Component {
  render(){
let {config,handleFieldChange,handleOnSubmit}=this.props;
console.log(config ,"items");
    return(
<div>
<Flexi items={config.items} handleFieldChange={handleFieldChange} handleOnSubmit={handleOnSubmit}/>
</div>

    )
  }
}
export default hoc(flexConfigForRegistration)(Register);
// <Flexi items={register} handleFieldChange={handleFieldChange} handleOnSubmit={handleOnSubmit} />
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
