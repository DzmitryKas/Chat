import React from "react";
// import "./App.css";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nickname: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({nickname: event.target.value})
    // this.props.setUser(event.target.value);
  } 

  handleSubmit() {
    this.props.setUser(this.state.nickname);
  }

  render() {
    const { nickname } = this.state;
    return (
      <div className="login">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <label htmlFor="nickname">
            <h1 style={{ textAlign: "center" }}>Your name?</h1>
          </label>

          <input
            ref={input => {
              this.textInput = input;
            }}
            id="nickname"
            type="text"
            value={nickname}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
