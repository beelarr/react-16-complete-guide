import React from 'react';
import cssStyles from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {

    const classes = [];
    let btnClass = '';

    if (props.showPeople) {
        btnClass = cssStyles.red;
    }


    if (props.persons.length <= 2) {
        classes.push(cssStyles.red);
    }
    if (props.persons.length <= 1) {
        classes.push(cssStyles.bold);
    }

    return (
        <Aux>
        {/*<div className={cssStyles.Cockpit}>*/}
            <h1>Hi, I'm an react app</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button
                className={btnClass}
                onClick={props.toggle}>
                    Toggle People
            </button>
        {/*</div>*/}
        </Aux>
        );
}

export default cockpit;
