import React, { Component } from "react";

export class FormHandling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      textarea: "",
      topic: "",
    };
  }
  inputChangeHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  textChangeHandler = (event) => {
    this.setState({
      textarea: event.target.value,
    });
  };
  topicChangeHandler = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  formHander = (event) => {
    event.preventDefault();
    alert(
      `${this.state.username} , ${this.state.textarea} and ${this.state.topic}`
    );
  };

  render() {
    return (
      <form onSubmit={this.formHander}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.inputChangeHandler}
          ></input>
        </div>
        <div>
          <label>TextArea</label>
          <input
            type="text"
            value={this.state.textarea}
            onChange={this.textChangeHandler}
          ></input>
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.topicChangeHandler}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
