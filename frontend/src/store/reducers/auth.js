import * as types from '../types/types'
import authenticate from '../../utils/authenticate/auth'

const userId = authenticate.userId()

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
        case types.LOAD_ALL_USERS: 
            return {...state, isLoggedIn: true, error: null, isLoading: false, allUsers: action.payload}
        case types.IS_LOADING: 
            return {...state, isLoading: true}
        case types.LOAD_USER_PROFILE:
                return {...state, userProfile: action.payload[0], isLoading: false}
        case types.UPDATE_PROFILE:
            return {...state, isLoading: false, userProfile: action.payload[0]}
        case types.OPEN_MODAL: 
            return {...state, modalState: true}
        case types.CLOSE_MODAL:
            return {...state, modalState: false}
        case types.LOAD_USER_CHAT_WITH_PEER: {
                let allChats = action.payload
                allChats.map(chat => chat.isLoggedInUser = chat.sender_id === userId)
                return { ...state, isLoading: false, userChats: allChats }
          }
        case types.NEW_CHAT_MESSAGE: {
            const newChat = action.payload[0]
            const foundChat = state.userChats.find(chat => chat.chat_id === newChat.chat_id)

            if(!foundChat){
                newChat.isLoggedInUser = newChat.sender_id === userId
                const chats = state.userChats
                chats.push(newChat)
                return { ...state, isLoading: false, userChats: chats }
            }
            return
        }
        default:
            return state
    }
}
