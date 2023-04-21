import { Component } from "react";
//import { ReactDOM } from "react";

export default class LoginForm extends Component {
    handleSubmit = evt => {
      evt.preventDefault();
      const form = evt.currentTarget;
      const login = form.elements.login.value;
      const password = form.elements.password.value;
      console.log(login, password);
      this.props.onSubmit({ login, password });
      form.reset();
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="login" />
          <input type="password" name="password" />
          <button type="submit">Login</button>
        </form>
      );
    }
  }
  
  //ReactDOM.render(
    //<LoginForm onSubmit={values => console.log(values)} />,
    //document.getElementById("root")
  //);