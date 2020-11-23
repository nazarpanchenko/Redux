import { ADD_CART, DELETE_CART } from './cart.actions';

const initialValue = {
    products: []
};

const cartReducer = (state = initialValue, action) => {
    let shopItems;

    switch (action.type) {
        case ADD_CART:
            shopItems = {
                cart: {
                    products: state.products.concat(action.payload.product)
                }
            };
            
            return shopItems.cart;

        case DELETE_CART:
            const newList = state.products.filter(
                product => product.id !== action.payload.productId
            );
            shopItems = {
                cart : {
                    products: newList
                }
            };

            return shopItems.cart;

        default:
            return state;
    }
};

export default cartReducer;