import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(setLanguage('jp'));
store.dispatch(addProduct({ id: 76, name: 'milk' }));
store.dispatch(removeProduct(76));
store.dispatch(setUser({ name: 'Bob' }));
store.dispatch(removeUser());