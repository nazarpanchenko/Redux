import store from './store';
import { addUser, deleteUser } from './users.actions';

const onAddUser = () => {
    store.dispatch(addUser({ id: 76, name: 'Sarah' }));
};

const onDeleteUser = () => {
    store.dispatch(deleteUser(76));
};

store.subscribe(() => {
    console.log(store.getState());
});