export const NEXT = 'PAGINATION/NEXT';
export const PREV = 'PAGINATION/PREV';

export const goNext = userData => {
    return {
        type: NEXT,
        payload: {
            userData
        }
    };
};

export const goPrev = userData => {
    return {
        type: PREV,
        payload: {
            userData
        }
    };
};