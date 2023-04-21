import { Component } from "react";

export class SimpleForm extends Component {
    state = {
      inputValue: "",
    };
  
    handleChange = evt => {
      this.setState({ inputValue: evt.target.value });
      console.log(this.state);
    };
  
    render() {
      const { inputValue } = this.state;
      return (
        <input type="text" value={inputValue} onChange={this.handleChange} />
      );
    }
  }