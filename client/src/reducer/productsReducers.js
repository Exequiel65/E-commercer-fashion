import { types } from '../types/types';
const initialState = {
    user: JSON.parse(localStorage.getItem('userNoClassroom')) || "",
};


const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                ...action.payload
            }
        case types.authLogout:
            return {
                user : ""
            }
        default:
            return state
    }
}

export default AuthReducer;