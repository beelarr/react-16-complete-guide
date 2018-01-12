import React from 'react';
import cssStyles from './Person.css';

const person = (props) => {
    const random = Math.random();
    if (random > 0.5) {
        throw new Error('Something is broke')
    }

    return (

        <div className={cssStyles.Person}>
            <p onClick={props.taco}>
                I'm {props.name} and I am {props.age} years old
            </p>
            <p>{props.children}</p>
            <input
                type="text"
                onChange={props.burrito}
                value={props.name}/>
        </div>
    )
};


export default person;
