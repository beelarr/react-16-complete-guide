import React, { Component } from 'react';
import cssStyles from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

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
            <Aux>
                <p onClick={this.props.taco}>
                    I'm {this.props.name} and I am {this.props.age} years old
                </p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.burrito}
                    value={this.props.name}/>
            </Aux>
        )
    }
}


export default withClass(Person, cssStyles.Person);
