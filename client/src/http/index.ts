import axios from "axios"

const API_URL = String(process.env.API_KEY)

export const api = axios.create({
    baseURL: API_URL
})