import * as types from '../types/types'
import NetworkRequest from '../../utils/api/network'



export const loadPeerChats = async (userId, peerId, dispatch) => {
    dispatch({
        type: types.IS_LOADING
    })

    try {
        const response = await NetworkRequest.get(`chats/${userId}/${peerId}`)
        dispatch({
            type: types.LOAD_USER_CHAT_WITH_PEER,
            payload: response.data
        })
    } catch(error){
        dispatch({
            type: types.SET_ERROR,
            payload: error.message
        })
    }
    


}
