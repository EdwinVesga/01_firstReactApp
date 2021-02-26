import './App.css';
import React, { Component } from 'react';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {

  state = {
    users: [
      {userName: "Carlos"},
      {userName: "Jose"},
      {userName: "Maria"}
    ]
  };

  userNameHandler = (event) => {
    this.setState({
      users: [
        {userName: "Carlos"},
        {userName: event.target.value},
        {userName: "Maria"}
      ]
    });
  };

  render() {
    return (
    <div>
      <UserInput onChange= {this.userNameHandler} userName = {this.state.users[1].userName} />
      <UserOutput userName = {this.state.users[0].userName} />
      <UserOutput userName = {this.state.users[1].userName} />
      <UserOutput userName = {this.state.users[2].userName} />
    </div>
    );
  }
  
}

export default App;
