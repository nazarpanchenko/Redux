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
    let historyString = [];

    let currentValue = state.history.reduce((acc, value) => {
        if (typeof acc === 'string' && acc.charAt(0) === '+') {
            acc = acc.substring(1);
        }

        const sum = Number(acc) + Number(value);

        historyString.push(
            sum > 0 ? '+' + sum 
            : sum < 0 ? '' + sum : 
            '' + sum
        );

        return sum > 0 ? '+' + sum 
            : sum < 0 ? '' + sum : 
            '' + sum;
    }, 0);

    currentValue =
        currentValue === '+0' ? currentValue.substring(1) : currentValue;

    historyString = historyString.join('');

    // const historyString = state.history.join('');

    resultElem.textContent = 
        state.history.length === 0 ? '' : `${historyString} = ${currentValue}`;
});