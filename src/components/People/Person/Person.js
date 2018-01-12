import React, { Component } from 'react';
import cssStyles from './Person.css';

class Person extends Component {

    render() {
        return (
            <div className={cssStyles.Person}>
                <p onClick={this.props.taco}>
                    I'm {this.props.name} and I am {this.props.age} years old
                </p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.burrito}
                    value={this.props.name}/>
            </div>
        )
    }
}


export default Person;
