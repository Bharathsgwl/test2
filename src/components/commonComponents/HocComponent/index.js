import React from "react";

const hoc = config => Component => {
  class HocComponent extends React.Component {
    state = {
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
      const { handleOnSubmit, handleFieldChange } = this;
      return (
        <Component
          config={config}
          handleOnSubmit={handleOnSubmit}
          handleFieldChange={handleFieldChange}
        />
      );
    }
  }
  return HocComponent;
};

export default hoc;
