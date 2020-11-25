export const NEXT = 'PAGINATION/NEXT';
export const PREV = 'PAGINATION/PREV';

export const goNext = itemsPerPage => {
    return {
        type: NEXT,
        payload: {
            itemsPerPage
        }
    };
};

export const goPrev = itemsPerPage => {
    return {
        type: PREV,
        payload: {
            itemsPerPage
        }
    };
};