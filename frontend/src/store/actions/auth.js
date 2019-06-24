import NetworkRequest from '../../utils/api/network'
import * as types from '../types/types'


export const registerUser =  async (user, history, dispatch) => {
    dispatch({
        type: types.IS_LOADING
    })

    try {
        const response = await NetworkRequest.post('register', user)
        localStorage.setItem('token', response.data.token)
        dispatch({
            type: types.SIGN_UP_USER,
            payload: response
        })
        history.push('/chat')

    } catch(error){
        return dispatch ({
            type: types.SET_ERROR,
            payload: error.message
        })
        
    }
    
}

export const loginUser = async (user, history, dispatch) =>  {
    dispatch({
        type: types.IS_LOADING
    })

    try {
        const response = await NetworkRequest.post('login', user)
        localStorage.setItem('token', response.data.token)
        history.push('/chat')
        return dispatch({
            type: types.SIGN_IN_USER,
            payload: response
        })
        
    } catch (error) {
        return dispatch({
            type: types.SET_ERROR,
            payload: error.message
        })
    }
}
