import axios from 'axios'
import { PORT, testPORT } from './port'
export const getAllUsers = () => {
    return axios.get(testPORT + '/getallusers')
}

export const submitSingleUser = (data) => {
    return axios.post(testPORT + '/submitsingleuser', data)
}

export const delUserApi = (userid) => {
    return axios.post(PORT + '/deluser', { userid });
}
export const editUserApi = (userid, username) => {
    return axios.post(PORT + '/edituser', { userid, username });
}

