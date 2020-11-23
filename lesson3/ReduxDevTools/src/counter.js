import { createStore } from "redux";

const increment = () => {
    return {
        type: 'COUNTER/INCREMENT'
    };
};

const decrement = () => {
    return {
        type: 'COUNTER/DECREMENT'
    };
};

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case increment:
            return state + 1;
        case decrement:
            return state - 1;
        default:
            return state;
    }
}

const counterReducer = createStore(counterReducer);

const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
        window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;