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
      type: "CardC",
      props: {
        color: "grey",
        horozintalAlign: "left",
      },
      children: {
        items: [
          {
            type: "TexField",
            props:{
              inputType:"text",
              label:"Name",
              name:"name"
            }
          },
          {
            type: "TexField",
            props:{
              inputType:"email",
              label:"Email",
              name:"email"
            }
          },
          {
            type: "TexField",
            props:{
              inputType:"number",
              label:"Mobile",
              name:"Message"
            }
          },
          {
            type: "RadioGroup",
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
            type: "TexField",
            props:{
              inputType:"password",
              label:"Password",
              name:"password"
            }
          },
          {
            type: "TexField",
            props:{
              inputType:"password",
              label:"Confirm Password",
              name:"confirmPassword"
            }
          },
          {
            type: "Buttons",
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
