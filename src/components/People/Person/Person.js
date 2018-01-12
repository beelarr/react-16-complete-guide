import React, { Component } from 'react';
import cssStyles from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('These are my props', props);
    }

    componentWillMount() {
        console.log('Person.js cwm', );
    };

    componentDidMount() {
        console.log('Person.js cdm');
    }


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
