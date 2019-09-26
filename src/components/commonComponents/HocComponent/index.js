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
              horozintalAlign: "left"
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
              horozintalAlign: "left"
            }
          },
          {
            type: "Card",
            props: {
              color: "grey",
              horizontalAlign: "center",
              verticalAlign: "center"
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
              color: "grey",
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
      return (
        <Component
          config={flexConfigForHome}
          config1={flexConfigForRegistration}
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
