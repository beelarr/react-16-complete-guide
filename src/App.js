import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, Im an react app</h1>
          <p>This is really working</p>
          <Person age=""/>
          <Person/>

          <Person/>

      </div>
        
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1'))
  }
}

export default App;
