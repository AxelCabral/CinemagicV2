import axios from 'axios';

export const movieApi = axios.create({
    baseURL: 'http://localhost:3333/'
})

export const userApi = axios.create({
    baseURL: 'http://localhost:3332/'
})