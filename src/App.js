import logo from './logo.svg';
import './App.css';
import Clock from './Clock'
import Form from './Form'
import User from './User'
import userEvent from '@testing-library/user-event';
import { Component } from 'react';

class App extends Component {
  users = [
    { id: 1, name: "User 01", age: 10 },
    { id: 2, name: "User 02", age: 20 },
    { id: 3, name: "User 03", age: 30 },
  ];

  constructor() {
    super();
    this.state = { message: "-------"};
    this.xyz = this.xyz.bind(this);
  }

  xyz(input) {
    this.setState({message: "New section: " + input});
  }

  render() {
    return (
      <div>
          <User users={this.users} />
          <Clock />
          <Form onSayHi={this.xyz}/>
          <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
