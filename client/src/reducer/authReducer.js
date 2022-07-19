import { types } from '../types/types';

const initialState = {
    user: JSON.parse(sessionStorage.getItem('sessionEcommerce')) || ""
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                ...action.payload
            }
        case types.authRegister:
            return {
                ...state,
                ...action.payload
            }
        case types.authLogout:
            return {
                ...state,
                user : ""
            }
        default:
            return state
    }
}

export default AuthReducer;


