import { ADD_CART, DELETE_CART } from './cart.actions';

const initialState = {
    cart: {
        products: []
    }
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    products: state.cart.products.concat(action.payload.product)
                }
            };
        case DELETE_CART:
            const updatedProducts = state.cart.products.map(product => {
                if (product.id === action.payload.productId) {
                    return {
                        ...state,
                        cart : {
                            ...state.cart,
                            ...action.payload.product
                        }
                    };
                }

                return user;
            });
            return {
                ...state,
                cart: updatedProducts
            };
        default:
            return state;
    }
};

export default cartReducer;