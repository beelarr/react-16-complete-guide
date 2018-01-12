import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
        { id: 3211, name: 'Bryon', age: 41 },
        { id: 312, name: 'Lori', age: 42 },
        { id: 13, name: 'Jude', age: 12 }
    ],
      showPeople: false
  }

  deletePersonHandler = (personIndex) => {
    let persons = [...this.state.persons]; // always creates a new array from our state.persons array
    persons.splice(personIndex, 1);  // remove one item at index = personIndex
    this.setState({persons: persons})
  };

  nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
          return p.id === id;
      });

      const person = { ...this.state.persons[personIndex] }; //creates a new object in person of who we clicked

      person.name = event.target.value; // who we are dynamically changing on the screen

      let persons = [...this.state.persons];
      persons[personIndex] = person;  //person is the object of the person we are editing and we are saying it is equal to the person on the index from where we clicked

      this.setState( {
          persons: persons  // updating the state of the persons array of people
      })
  };

    togglePersonHandler = () => {
        let doesShow = this.state.showPeople;
        this.setState({showPeople: !doesShow})
    };

  render() {

      const buttonStyle = {
          backgroundColor: 'green',
          color: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '1%',
          cursor: 'pointer'
      };

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
                              key={person.id}
                              burrito={(event) => this.nameChangedHandler(event, person.id)}
                          />)
                  })}
              </div>
          );
          buttonStyle.backgroundColor = 'red'
      }
    return (
      <div className="App">
        <h1>Hi, I'm an react app</h1>
          <p>This is really working</p>
          <button
              onClick={this.togglePersonHandler}
              style={buttonStyle}>
            Toggle People
          </button>
          {persons}





      </div>
        
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1'))
  }
}

export default App;
