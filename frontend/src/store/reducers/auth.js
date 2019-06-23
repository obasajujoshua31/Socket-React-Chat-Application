import * as types from '../types/types'


export default (state, action) => {
    switch(action.type){
        case types.SIGN_UP_USER: 
            return {...state,  isLoggedIn: true, error: null, isLoading: false}
        case types.SIGN_IN_USER: 
            return { ...state, isLoggedIn: true, error: null, isLoading: false }
        
        case types.LOGOUT_USER:
            return { ...state, isLoggedIn: false, error: null, isLoading: false }
        case types.SET_ERROR:
            const result = {...state, isLoggedIn: false, error: action.payload, isLoading: false}
            return result
        default:
            return state
    }
}
