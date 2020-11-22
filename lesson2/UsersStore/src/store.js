import { createStore } from 'redux';
import { userReducer } from './users.reducer.js';

const store = createStore(userReducer);

export default store;