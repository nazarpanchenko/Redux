import { ADD_CART, DELETE_CART } from './cart.actions';

// const initialState = {
//     cart: {
//         products: []
//     }
// };
const cart = {
    products: []
};

const cartReducer = (state = cart, action) => {
    switch (action.type) {
        case ADD_CART:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    products: state.products.concat(action.payload.product)
                }
            };

        case DELETE_CART:
            const updatedProducts = state.products.map(product => {
                if (product.id !== action.payload.productId) {
                    return {
                        ...state,
                        cart : {
                            ...state.cart,
                            products: [
                                action.payload.product
                            ]

                        }
                    };
                }

                return product;
            });

            return {
                ...state,
                cart: {
                    products: updatedProducts
                }
            };

        default:
            return state;
    }
};

export default cartReducer;