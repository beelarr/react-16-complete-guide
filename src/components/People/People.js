import React from 'react';
import Person from './Person/Person';

const people = (props) => props.persons.map((person, index) => {
        return <Person
                    taco={() => props.delete(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    burrito={(event) => props.changed(event, person.id)}
                />
});


export default people;
