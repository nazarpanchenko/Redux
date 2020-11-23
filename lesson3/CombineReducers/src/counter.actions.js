const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';
const RESET = 'COUNTER/RESET';

export const INCREMENT = () => {
    return {
        type: INCREMENT
    }
};

export const DECREMENT = () => {
    return {
        type: DECREMENT
    }
};

export const RESET = () => {
    return {
        type: RESET
    }
};