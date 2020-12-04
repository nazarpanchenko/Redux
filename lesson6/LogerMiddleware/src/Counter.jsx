import React from 'react';
import { connect } from 'react-redux';
import * as counterAction from './counter.actions';

const Counter = ({ value, increment, decrement, reset }) => {
    return (
        <div className="counter">
            <button className="counter__button" onClick={() => decrement()}>
                -
            </button>
            <span className="counter__value" onClick={() => reset()}>
                {value}
            </span>
            <button className="counter__button" onClick={() => increment()}>
                +
            </button>
        </div>
    );
}

const mapState = state => {
    return {
        value: state
    }
};

const mapDispatch = {
    increment: counterAction.increment,
    decrement: counterAction.decrement,
    reset: counterAction.reset
};

export default connect(mapState, mapDispatch)(Counter);