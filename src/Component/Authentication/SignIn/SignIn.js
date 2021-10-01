import { Component } from "react";
import { reduxForm } from "redux-form";

class SignIn extends Component {
  handleFormSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    const {
      handleSubmit,
      fields: { username, password },
    } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset>
          <label>Username :</label>
          <input {...username} />
        </fieldset>
        <fieldset>
          <label>Password :</label>
          <input {...password} />
        </fieldset>
        <button>Sign In</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "signIn",
  fields: ["username", "password"],
})(SignIn);
