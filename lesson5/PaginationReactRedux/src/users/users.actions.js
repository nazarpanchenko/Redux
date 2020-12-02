export const NEXT = 'PAGINATION/NEXT';
export const PREV = 'PAGINATION/PREV';

export const goNextPage = userData => {
    return {
        type: NEXT,
        payload: {
            userData
        }
    };
};

export const goPrevPage = userData => {
    return {
        type: PREV,
        payload: {
            userData
        }
    };
};