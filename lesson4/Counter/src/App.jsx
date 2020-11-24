import React from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './store';

export const App = () => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
};
