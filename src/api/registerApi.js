import axios from 'axios';
import { PORT } from './port'
export function registerApi() {
    return axios.post(PORT + "/registerMysql")
}

export function getInitNum() {
    return axios.get('/');
}