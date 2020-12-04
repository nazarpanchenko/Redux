export const SHOW_SPINNER = 'SHOW_SPINNER';
export const USER_DATA_RECEIVED = 'USER_DATA_RECEIVED';
import { getUserData } from './users.gateway';

export const showSpinner = () => {
    return {
        type: SHOW_SPINNER
    }
};

export const userDataReceived = userData => {
    return {
        type: USER_DATA_RECEIVED,
        payload: {
            userData
        }
    }
};

export const fetchUserData = userName => {
    return function(dispatch) {
        dispatch(showSpinner());
        getUserData(userName)
            .then(userData => {
                dispatch(userDataReceived(userData));
        });
    }
};