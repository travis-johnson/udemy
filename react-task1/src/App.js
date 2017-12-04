import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
state = {
  username: [
   { name:'sphenx'}
  ]
}
  userNameHandler = (event) =>{
    this.setState({username:[
      
      {name:event.target.value}
      
    ]})
  }
  render() {
    return (
      <div className="App">
        <UserOutput name={this.state.username[0].name}  />
        <UserInput changed={this.userNameHandler} currentName={this.state.username[0].name}/>
      </div>
    );
  }
}

export default App;
