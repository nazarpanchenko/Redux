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
            stringNums.push('+' + sum);
        }
        else if (value < 0) {
            stringNums.push('' + sum);
        }
        
        return sum;
    }, 0);

    for (let i = 0; i < stringNums.length - 1; i++) {
        let current = stringNums[i],
            next = stringNums[i + 1],
            prev = stringNums[i - 1];

        if (current.charAt(0) === '-' && next.charAt(0) === '+') {
            stringNums[i + 1] = '' + stringNums[i + 1].substring(1);
        }
    }
    
    const historyString = stringNums.join('');

    resultElem.textContent = 
        state.history.length === 0 ? '' : `${historyString} = ${currentValue}`;
});