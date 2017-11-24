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
  }

  switchNameHandler = (newName) => {
      this.setState( {
          persons: [
          { name: newName, age: 41 },
          { name: 'Lori', age: 42 },
          { name: 'Jude Porter', age: 13 }
      ]
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, Im an react app</h1>
          <p>This is really working</p>
          <button
              onClick={() => this.switchNameHandler('Beelarr!!')}>
            Switch Name
          </button>
          <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              taco={this.switchNameHandler}
          />

          <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].name}>Passing through props.childern in parent/</Person>
          <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].name}
              taco={this.switchNameHandler.bind(this, 'Jude Porter')}
          />
      </div>
        
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1'))
  }
}

export default App;
