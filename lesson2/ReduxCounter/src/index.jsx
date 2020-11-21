import { createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';

const incrementActionCreator = () => {
    return {
        type: INCREMENT
    };
};

const decrementActionCreator = () => {
    return {
        type: DECREMENT
    };
};

const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
    }
};

const store = createStore(counterReducer);

store.dispatch(incrementActionCreator);
store.dispatch(decrementActionCreator);