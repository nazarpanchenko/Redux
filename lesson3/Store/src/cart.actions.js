export const ADD_CART = 'CART/ADD_CART';
export const DELETE_CART = 'CART/DELETE_CART';

export const addProduct = product => {
    return {
        type: ADD_CART,
        payload: {
            product
        }
    };
};

export const removeProduct = productId => {
    return {
        type: DELETE_CART,
        payload: {
            productId
        }
    };
};