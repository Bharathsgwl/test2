import React from "react";

const hoc = () => Component => {
  class HocComponent extends React.Component {
    state = {
      flexConfigForHome: {
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
      },
      flexConfigForRegistration: {
        items: [
          {
            type: "Header",
            props: {
              label: "Registration",
              horozintalAlign: "center",
              verticalAlign: "center"
            }
          },
          {
            type: "Card",
            props: {
              backgroundColor: "grey",
              horozintalAlign: "left"
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
                    name: "phone"
                  }
                },
                {
                  type: "RadioGruop",
                  props: {
                    label: "Gender",
                    name: "gender",
                    options: [
                      {
                        label: "Male"
                      },
                      {
                        label: "Female"
                      }
                    ]
                  }
                },
                {
                  type: "TextField",
                  props: {
                    inputType: "password",
                    label: "Password",
                    name: "password"
                  }
                },
                {
                  type: "TextField",
                  props: {
                    inputType: "password",
                    label: "Confirm Password",
                    name: "confirmPassword"
                  }
                },
                {
                  type: "Button",
                  props: {
                    label: "Register"
                  }
                }
              ]
            }
          }
        ]
      },
      list: {}
    };
    handleOnSubmit = e => {
      e.preventDefault();
      let { list } = this.state;
      console.log(this.state.list);
    };

    handleFieldChange = event => {
      let { list } = this.state;
      const { name, value } = event.target;
      console.log(name, value);
      this.setState({
        list: {
          ...list,
          [name]: value
        }
      });
    };

    render() {
      const { flexConfigForHome, flexConfigForRegistration } = this.state;
      const { handleOnSubmit, handleFieldChange } = this;
      console.log(this);
      return (
        <Component
          home={flexConfigForHome.items}
          register={flexConfigForRegistration.items}
          handleOnSubmit={handleOnSubmit}
          handleFieldChange={handleFieldChange}
          {...this.props}
        />
      );
    }
  }
  return HocComponent;
};

export default hoc;
