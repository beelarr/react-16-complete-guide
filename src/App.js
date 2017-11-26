import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
        { name: 'Bryon', age: 41 },
        { name: 'Lori', age: 42 },
        { name: 'Jude', age: 12 }
    ],
      showPeople: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);  // remove one item at index = personIndex
    this.setState({persons: persons})
  };

  nameChangedHandler = (event) => {
      this.setState( {
          persons: [
              { id: 3211, name: 'Bryon', age: 41 },
              { id: 312, name: event.target.value, age: 42 },
              { id: 13, name: 'Jude Porter', age: 13 }
          ]
      })
  }

    togglePersonHandler = () => {
        let doesShow = this.state.showPeople;
        this.setState({showPeople: !doesShow})
    };

  render() {

      let persons;
      if (this.state.showPeople) {
          persons =(
              <div>
                  {this.state.persons.map((person, index) => {
                      return(
                          <Person
                              taco={() => this.deletePersonHandler(index)}
                              name={person.name}
                              age={person.age}
                              key={id}
                          />)
                  })}
              </div>
          );
      }
    return (
      <div className="App">
        <h1>Hi, Im an react app</h1>
          <p>This is really working</p>
          <button
              onClick={this.togglePersonHandler}
              style={{
                  backgroundColor: 'white',
                  font: 'inherit',
                  border: '1px solid blue',
                  padding: '1%',
                  cursor: 'pointer'
              }}>
            Toggle People
          </button>
          {persons}





      </div>
        
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1'))
  }
}

export default App;
