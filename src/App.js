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

  switchNameHandler = (newName) => {
      this.setState( {
          persons: [
          { name: newName, age: 41 },
          { name: 'Lori', age: 42 },
          { name: 'Jude Porter', age: 13 }
      ]
      })
  }

  nameChangedHandler = (event) => {
      this.setState( {
          persons: [
              { name: 'Bryon', age: 41 },
              { name: event.target.value, age: 42 },
              { name: 'Jude Porter', age: 13 }
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
                  <Person
                      name={this.state.persons[0].name}
                      age={this.state.persons[0].age}
                      taco={this.switchNameHandler}
                  />

                  <Person
                      name={this.state.persons[1].name}
                      age={this.state.persons[1].age}
                      burrito={this.nameChangedHandler}
                  >Passing through props.childern in parent/</Person>
                  <Person
                      name={this.state.persons[2].name}
                      age={this.state.persons[2].age}
                      taco={this.switchNameHandler.bind(this, 'Jude Porter')}
                  />
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
