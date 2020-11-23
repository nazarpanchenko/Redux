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
            const updatedProducts = state.products.map(product => {
                if (product.id !== action.payload.productId) {
                    return {
                        ...product,
                        ...action.payload.product
                    };
                }

                return product;
            });
            shopItems = {
                cart : {
                    products: updatedProducts
                }
            };

            return shopItems.cart;

        default:
            return state;
    }
};

export default cartReducer;