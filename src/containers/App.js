import React, { PureComponent } from 'react';
import cssStyles from './App.css';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends PureComponent {
    constructor(props) {
        super(props);
    console.log('These are my props', props);
    }

    state = {
        persons: [
            { id: 3211, name: 'Bryon', age: 41 },
            { id: 312, name: 'Lori', age: 42 },
            { id: 13, name: 'Jude', age: 12 }
        ],
        showPeople: false
    }

    componentWillMount() {
        console.log('App.js cwm', );
    };
    
    componentDidMount() {
        console.log('App.js cdm');
    }

    // shouldComponentUpdate( nextProps, nextState ) {
    //     return nextState.persons !== this.state.persons ||
    //             nextState.showPeople !== this.state.showPeople
    // }




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
        
      console.log('Inside App.js render');
      let persons;

      if (this.state.showPeople) {
          persons = <People
                      persons={this.state.persons}
                      delete={this.deletePersonHandler}
                      change={this.nameChangedHandler}
                  />
      }

      return (
            <Aux>
              <button onClick={() => this.setState({showPeople: true})}>Show Persons</button>
              <Cockpit
                showPeople={this.state.showPeople}
                persons={this.state.persons}
                toggle={this.togglePersonHandler}
              />
              {persons}
            </Aux>
    );
  }
}

export default withClass(App, cssStyles.App);
