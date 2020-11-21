import { createStore } from 'redux';

const incrementAction = {
    type: 'INCREMENT'
};

const decrementAction = {
    type: 'DECREMENT'
};

const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
    }
};

const store = createStore(counterReducer);

store.dispatch(incrementAction);
store.dispatch(decrementAction);