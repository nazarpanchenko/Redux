export const TEXT_CHANGE = 'INPUT/TEXT_CHANGE';

export const onInputChange = text => {
    return {
        type: TEXT_CHANGE,
        payload: {
            text
        }
    }
}