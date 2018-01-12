import React from 'react';
import cssStyles from './Person.css';

const person = (props) => {
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
