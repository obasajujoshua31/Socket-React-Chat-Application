import axios from 'axios'
import {API_URL} from '../constants/constants'


export default class NetworkRequest {
    static async get(url) {
        try {
            const response = await axios.get(`${API_URL}/${url}`)
            return response.data
        } catch(error){
            throw error.response.data
        }
    
    }

    static async post(url, data){
        try {
            const response = await axios.post(`${API_URL}/${url}`, data)
            return response.data
        } catch(error){
            throw error.response.data
        }
    }

    static async put(url, data){
        try {
            const response = await axios.put(`${API_URL}/${url}`, data, {headers: {
                Authorization: localStorage.getItem('token')
            }})
            return response.data
        } catch(error){
            throw error.response.data
        }
    }
}
