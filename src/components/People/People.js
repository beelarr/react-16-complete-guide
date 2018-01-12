import React, { Component } from 'react';
import Person from './Person/Person';

class People extends Component {
    render() {
              return  this.props.persons.map( (person, index) => {
            return (
                    <Person
                        taco={() => this.props.delete(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        burrito={(event) => this.props.changed(event, person.id)}
                    />
            )
                })

    }
}

export default People;
