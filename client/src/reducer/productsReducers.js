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
                user : "",
                student : "",
                subjects : "",
                teachers : ""
            }

        case types.GET_STUDENT:
            return {
                ...state,
                student: action.payload
            }
        case types.GET_SUBJECT:
            return {
                ...state,
                subjects: action.payload
            }

        case types.GET_TEACHERS:
            return {
                ...state,
                teachers: action.payload
            }
        default:
            return state
    }
}

export default AuthReducer;