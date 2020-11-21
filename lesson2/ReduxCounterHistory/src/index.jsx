import './index.scss';
import store, { increment, decrement, reset } from './store';

const resultElem = document.querySelector('.counter__result');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const onIncrement = () => {
    store.dispatch(increment());
}

const onDecrement = () => {
    store.dispatch(decrement());
}

const onReset = () => {
    store.dispatch(reset());
}

incrementBtn.addEventListener('click', onIncrement);
decrementBtn.addEventListener('click', onDecrement);
resetBtn.addEventListener('click', onReset);

store.subscribe(() => {
    const state = store.getState();
    const stringNums = [];

    const currentValue = state.history.reduce((acc, value) => {
        const sum = acc + value;

        if (value > 0) {
            stringNums.push('+' + sum) 
        } else if (value <= 0) {
            stringNums.push(sum);
        }
        
        return sum;
    }, 0);
    
    const historyString = stringNums.join('');

    resultElem.textContent = 
        state.history.length === 0 ? '' : `${historyString} = ${currentValue}`;
});