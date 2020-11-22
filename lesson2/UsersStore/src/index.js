import store from './store';

const onAddUser = () => {
    store.dispatch(addUser({ id: 76, name: 'Sarah' }));
};
const onDeleteUser = () => {
    store.dispatch(deleteUser(76));
};

store.subscribe(() => {
    console.log(store.getState());
});