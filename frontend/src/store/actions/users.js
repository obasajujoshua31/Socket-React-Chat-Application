import NetworkRequest from '../../utils/api/network'
import * as types from '../types/types'
import {CLOUDINARY_PRESET, CLOUDINARY_URL} from '../../utils/constants/constants'
import axios from 'axios'


export const loadAllUsers = async (dispatch) => {
    dispatch({
        type: types.IS_LOADING
    })

    try {
        const response = await NetworkRequest.get('users',)
       return dispatch({
            type: types.LOAD_ALL_USERS,
            payload: response.data
        })

    } catch (error) {
        return dispatch({
            type: types.SET_ERROR,
            payload: error.message
        })
    }
}

export const getUserProfile = async (userId, dispatch) => {
    dispatch({
        type: types.IS_LOADING
    })

    try {
        const response = await NetworkRequest.get(`user/${userId}`)
        return dispatch({
            type: types.LOAD_USER_PROFILE,
            payload: response.data
        })

    } catch(error){
        return dispatch({
            type: types.SET_ERROR,
            payload: error.message
        })
    }
}


const updateProfile = async  (user, alert, dispatch) => {
      const {imageURL, interest} = user

    try {
        const response = await NetworkRequest.put('users/update', {imageURL, interest})
        dispatch({
            type: types.UPDATE_PROFILE,
            payload: response.data
        })
        alert.success('Profile updated successfully')
        return dispatch({
            type: types.CLOSE_MODAL
        })

    } catch(error) {
        dispatch({
            type: types.SET_ERROR,
            payload: error.message
        });
        alert.error('Profile update Failed')
        return dispatch({
            type: types.CLOSE_MODAL
        })

    }
}

export const updateProfileRequest = (user, alert, dispatch) => {
    const imageData = new FormData();
    dispatch({
        type: types.IS_LOADING
    })

    if (user.imageFile.name) {
        imageData.append("file", user.imageFile);
        imageData.append("upload_preset", CLOUDINARY_PRESET);

        return axios
            .post(CLOUDINARY_URL, imageData)
            .then(response => {
                user.imageURL = response.data.secure_url;
                alert.success('Upload Image Succeeded')
                return updateProfile(user, alert, dispatch)
            })
            .catch(() => {
                alert.error('Upload Image Failed')
                dispatch({ type: types.SET_ERROR, payload: "Upload Image Failed" });
            });
    }
    return updateProfile(user, alert, dispatch)
}; 

