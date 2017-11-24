import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
        { name: 'Bryon', age: 41 },
        { name: 'Lori', age: 42 },
        { name: 'Jude', age: 12 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, Im an react app</h1>
          <p>This is really working</p>
          <button>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].name}>Passing through props.childern in parent/</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].name}/>
      </div>
        
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1'))
  }
}

export default App;
